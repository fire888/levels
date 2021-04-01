import * as THREE from 'three'
import * as TWEEN from '@tweenjs/tween.js'
import {
    studioConfig,
    //FLOORS_COLORS,
    FLOORS_CONF,
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
        const { color, fogNear, fogFar } = FLOORS_CONF['-1']['outer']
        scene.fog = new THREE.Fog(color, fogNear, fogFar)
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
    emitter.subscribe('changeEnvironment')(({ mode, floor }) => {
        console.log('changeEnvironment !!!!!!!', mode, floor)

        const { fogNear, fogFar, color } = FLOORS_CONF[floor][mode]


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


        console.log('floor', startData, endData)

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
    })



    return {
        setCamera: cam => camera = cam,
        addToScene,
    }
}

