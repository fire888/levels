import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import { studioConfig } from '../constants/constants_elements'
import { FRAME_UPDATE } from '../constants/constants_elements'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { Saturate } from '../shaders/saturate'





export function createStudio (emitter, assets, store) {
    const { canId, rendererCon, clearColor, fogData, amb } = studioConfig

    const canvas = document.getElementById(canId)
    rendererCon.canvas = canvas

    const renderer = new THREE.WebGLRenderer(rendererCon)
    renderer.setClearColor(clearColor)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()

    {
        const { color, fogNear, fogFar, backgroundImgKey } = store.getState().app.sceneEnvironment
        scene.background = assets[backgroundImgKey] || null
        scene.fog = new THREE.Fog(color, fogNear, fogFar)
    }


    let lightA
    {
        const { color, strength } = amb
        lightA = new THREE.AmbientLight( color, strength )
        scene.add( lightA )
    }

    let camera = null


    const composer = new EffectComposer(renderer)
    //composer.addPass(new RenderPass(scene, camera))



    const resize = () => {
        const size = { width: window.innerWidth, height: window.innerHeight }
        renderer.setSize(size.width, size.height)
        composer.setSize(size.width, size.height)
        if (camera) {
            camera.aspect = size.width/size.height
            camera.updateProjectionMatrix()
        }
    }
    window.addEventListener('resize', resize)
    resize()




    const addToScene = scene.add.bind(scene)
    //const drawFrame = () => camera && renderer.render(scene, camera)
    const drawFrame = () => camera && composer.render(scene, camera)
    emitter.subscribe(FRAME_UPDATE)(drawFrame)



    

    let
        oldFogNear = scene.fog.near,
        oldFogFar = scene.fog.far,
        oldColor = scene.fog.color,
        oldBackgroundImgKey = store.getState().app.sceneEnvironment.backgroundImgKey




    store.subscribe(() => {
        const newState = store.getState()
        const { fogNear, fogFar, color, backgroundImgKey } = newState.app.sceneEnvironment

        if (fogNear !== oldFogNear || fogFar !== oldFogFar || color !== oldColor ) {
            let startData = {
                color: scene.fog.color,
                near: scene.fog.near,
                far: scene.fog.far,
            }
            let endData = {
                color: new THREE.Color(color),
                near: fogNear,
                far: fogFar,
            }

            oldFogNear = fogNear
            oldFogFar = fogFar
            oldColor = color

            new TWEEN.Tween(startData)
                .to(endData, 3000)
                .onUpdate(() => {
                    scene.fog.color = startData.color
                    scene.fog.near = startData.near
                    scene.fog.far = startData.far
                    lightA.color = startData.color
                    renderer.setClearColor(startData.color)
                })
                .start()
        }


        if (backgroundImgKey !== oldBackgroundImgKey) {
            oldBackgroundImgKey = backgroundImgKey
            scene.background = assets[backgroundImgKey] || null
        }
    })



    return {
        setCamera: cam => {

            camera = cam
            composer.addPass(new RenderPass(scene, cam))
            composer.addPass(new ShaderPass(Saturate))

        },
        addToScene,
    }
}

