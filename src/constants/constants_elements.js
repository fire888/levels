import pxjpg from '../assets/skybox/px.jpg'
import nxjpg from '../assets/skybox/nx.jpg'
import pyjpg from '../assets/skybox/py.jpg'
import nyjpg from '../assets/skybox/ny.jpg'
import pzjpg from '../assets/skybox/pz.jpg'
import nzjpg from '../assets/skybox/nz.jpg'

import pxjpg2 from '../assets/matIronBox/posx.jpg'
import nxjpg2 from '../assets/matIronBox/negx.jpg'
import pyjpg2 from '../assets/matIronBox/posy.jpg'
import nyjpg2 from '../assets/matIronBox/negy.jpg'
import pzjpg2 from '../assets/matIronBox/posz.jpg'
import nzjpg2 from '../assets/matIronBox/negz.jpg'

import levelRoomsSrc from '../assets/level-rooms.obj'
import mapFloorOuter from '../assets/floor_outer_map.jpg'

import botMap from '../assets/botMap.png'
import botSrc from '../assets/botAnim2.glb'



export const ASSETS_TO_LOAD = [
    {
        type: 'obj',
        filename: levelRoomsSrc,
        key: 'level-rooms'
    }, {
        type: 'glb',
        filename: botSrc,
        key: 'bot'
    }, {
        type: 'cubeTextures',
        filename: { px: pxjpg, nx: nxjpg, py: pyjpg, ny: nyjpg, pz: pzjpg, nz: nzjpg, },
        key: 'skyBox'
    }, {
        type: 'cubeTextures',
        filename: { px: pxjpg2, nx: nxjpg2, py: pyjpg2, ny: nyjpg2, pz: pzjpg2, nz: nzjpg2, },
        key: 'ironEnv',
    }, {
        type: 'img',
        filename: botMap,
        key: 'botMap',
    }, {
        type: 'img',
        filename: mapFloorOuter,
        key: 'mapFloorOuter',
        wrap: true,
},]




export const MATERIALS_CONFIG = {

    'iron': {
        mat: 'MeshPhongMaterial',
        props: {
            color: 0xffffff,
            emissive: 0x003388,
            specular: 0xffffff,
            shininess: 60,
            bumpMap: 'botMap',
            bumpScale: 0.1,
            envMap: 'ironEnv',
            reflectivity: 0.5,
            map: 'botMap',
            skinning: true,
        },
    },

    'wall': {
        mat: 'MeshPhongMaterial',
        props: {
            color: 0x004466,
            emissive: 0xffffff,
            map: 'mapFloorOuter',
            bumpMap: 'mapFloorOuter',
            bumpScale: 1,
            envMap: 'skyBox',
            reflectivity: 0.5,
            specular: 0x222222,
        },
    },


    'green': {
        mat: 'MeshPhongMaterial',
        props: {
            color: 0x004466,
            emissive: 0xffffff,
            map: 'mapFloorOuter',
            bumpMap: 'mapFloorOuter',
            bumpScale: 1,
            envMap: 'skyBox',
            reflectivity: 0.5,
        },        
    },

    'road': {
        mat: 'MeshPhongMaterial',
        props: {
            color: 0xa1129f,
            emissive: 0xa1129f,
            map: 'mapFloorOuter',
            bumpMap: 'mapFloorOuter',
            bumpScale: 1,
            envMap: 'skyBox',
            reflectivity: 0.5,
        },        
    } 
}




/** size element */
export const S = 175.335
export const H = 70



/** emitter constants */
export const FRAME_UPDATE = 'FRAME_UPDATE'




export const FLOORS_CONF = {
    '-2': {
        'outer': { fogNear: -200, fogFar: 500, color: 0x18257d },
        'corridorLight': { fogNear: -40, fogFar: 150, color: 0x6b006c },
        'default': { fogNear: -40, fogFar: 150, color: 0x8805a8 },
    },

   

    '-1': {
        'start': { fogNear: 0, fogFar: 5, color: 0x18257d },
        'outer': { fogNear: 20, fogFar: 500, color: 0x18257d },
        'back': { fogNear: 20, fogFar: 500, color: 0x18257d, backgroundImgKey: 'skyBox' },
        'firstRoomLight': { fogNear: -40, fogFar: 150, color: 0x00235e},
        'corridorLight': { fogNear: -40, fogFar: 150, color: 0x6b006c },
        'default': { fogNear: -40, fogFar: 150, color: 0x2e118b },
    },


    '0': { 'default': { fogNear: -40, fogFar: 150, color: 0x3c4900 }, },

    
    '1': { 'default': { fogNear: -40, fogFar: 150, color: 0x0e3e52 }, },


    '2': { 'default': { fogNear: 0, fogFar: 80, color: 0x0a1763 }, },


    '3': { 'default': { fogNear: 0, fogFar: 80, color: 0x0a6340 }, },


    '4': { 'default': { fogNear: 0, fogFar: 80, color: 0xac0000 }, },
}




export const studioConfig = {
    canId: 'webgl-canvas',
    rendererCon: {
        antialias: true
    },
    clearColor: FLOORS_CONF[-1]['outer'].color,
    backgroundColor: FLOORS_CONF[-1]['outer'].color,
    amb: {
        color: FLOORS_CONF[-1]['outer'].color,
        strength: 0.7,
    },
}


export const playerConfig = {
    //speed: 0.35,
    speed: 0.8,
    speedRot: 0.02,
    speedDown: -0.45,
    offsetFromFloor: 10.0,
    offsetFromFloorFactor: 0.5,
    offsetWallCollision: 3.5,
    level: -13,
    startRot: [0, 0, 0],
    startPos: [100, -60, 1000],
    //startPos: [90, -10, 360.7140705920112], // beginPlay
    cameraData: {
        fov: 90,
        ratio: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000,
        pos: [0, 2, -0.5],
    },
    frontObjPos: [0, 0, -1],
    lightDataOne: {
        //color: 0xc2d4f3,
        color: 0xffffff,
        strength: 5000,
        pos: [0, 50, 5],
    },
    // lightDataTwo: {
    //     color: 0xff0000,
    //     strength: 0.2,
    //     pos: [0, -30, 40],
    // },
}
