import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import {
    studioConfig,
    BACK_COLOR_START,
    BACK_COLOR,
} from './constants_elements'
import { FRAME_UPDATE } from './constants_elements'



export function createStudio (emitter, assets) {
    const { canId, rendererCon, clearColor, fogData, amb } = studioConfig

    const canvas = document.getElementById(canId)
    rendererCon.canvas = canvas

    const renderer = new THREE.WebGLRenderer(rendererCon)
    renderer.setClearColor(clearColor)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()
    //scene.background = assets.skyBox

    {
        const { color, strength } = fogData
        scene.fog = new THREE.FogExp2(color, strength)
    }

    let lightA
    {
        const { color, strength } = amb
        lightA = new THREE.AmbientLight( color, strength )
        scene.add( lightA )
    }

    let camera = null

    const resize = () => {
        const size = { width: window.innerWidth, height: window.innerHeight }
        renderer.setSize(size.width, size.height)
        if (camera) {
            camera.aspect = size.width/size.height
            camera.updateProjectionMatrix()
        }
    }

    window.addEventListener('resize', resize)
    resize()

    const addToScene = scene.add.bind(scene)

    const drawFrame = () => camera && renderer.render(scene, camera)
    emitter.subscribe(FRAME_UPDATE)(drawFrame)
    emitter.subscribe('changeEnviroment')(val => {

        const dataOuter = {
            color: new THREE.Color(BACK_COLOR_START),
            str: fogData.strength,
        }
        const dataInner = {
            color: new THREE.Color(BACK_COLOR),
            str: fogData.strengthInner,
        }


        let startData, endData


        if (val === 'toInner') {
            startData = dataOuter
            endData = dataInner
        }
        if (val === 'toOuter') {
            startData = dataInner
            endData = dataOuter
        }

        new TWEEN.Tween(startData)
            .to(endData, 3000)
            .onUpdate(() => {
                scene.fog.color = startData.color
                scene.fog.density = startData.str
                lightA.color = startData.color
                renderer.setClearColor(startData.color)

            })
            .start()
    })



    return {
        setCamera: cam => camera = cam,
        addToScene,
    }
}

