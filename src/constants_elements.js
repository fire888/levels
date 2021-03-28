import './assets/start-img.png'
import './assets/progress-img.png'

import mapDiff from './assets/map-walls-diff.png'
import mapBump from './assets/map-walls-bump.png'

import pxjpg from './assets/skybox/px.jpg'
import nxjpg from './assets/skybox/nx.jpg'
import pyjpg from './assets/skybox/py.jpg'
import nyjpg from './assets/skybox/ny.jpg'
import pzjpg from './assets/skybox/pz.jpg'
import nzjpg from './assets/skybox/nz.jpg'

import pxjpg2 from './assets/matIronBox/posx.jpg'
import nxjpg2 from './assets/matIronBox/negx.jpg'
import pyjpg2 from './assets/matIronBox/posy.jpg'
import nyjpg2 from './assets/matIronBox/negy.jpg'
import pzjpg2 from './assets/matIronBox/posz.jpg'
import nzjpg2 from './assets/matIronBox/negz.jpg'

import botMapBump from './assets/botMapBump.png'
import botMap from './assets/botMap.png'

import levelSrc from './assets/level.obj'
import levelRoomsSrc from './assets/level-rooms.obj'
//import terminalSrc from './assets/terminal.glb'

//import botSrc from './assets/bot.obj'
import botSrc from './assets/botAnim.glb'



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
        filename: botMapBump,
        key: 'botMapBump',
    }, {
        type: 'img',
        filename: botMap,
        key: 'botMap',
    }, {
        type: 'img',
        filename: mapDiff,
        key: 'mapWalls',
    }, {
        type: 'img',
        filename: mapBump,
        key: 'bumpWalls',
},]



const PI = Math.PI
const R = 100


const BACK_COLOR = 0x8805a8

export const studioConfig = {
    canId: 'webgl-canvas',
    rendererCon: {
        antialias: true
    },
    clearColor: BACK_COLOR,
    backgroundColor: BACK_COLOR,
    fogData: {
        color: BACK_COLOR,
        //strength: 0.01,
        strength: 0.005,
    },
    amb: {
        color: BACK_COLOR,
        strength: 0.8,
    },
}



export const playerConfig = {
    speed: 0.35,
    speedRot: 0.02,
    speedDown: -0.25,
    offsetFromFloor: 10.0,
    offsetFromFloorFactor: 0.5,
    offsetWallCollision: 3.5,
    level: -13,
    startRot: [0, 0, 0],
    startPos: [100, -80, 1000],
    //startPos: [-500.7147858316392, 23, 63],
    cameraData: {
        fov: 90,
        ratio: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 1000,
        pos: [0, 2, -0.5],
    },
    frontObjPos: [0, 0, -1],
    lightDataOne: {
        color: 0xc2d4f3,
        strength: 0.5,
        pos: [0, 100, 0],
    },
    lightDataTwo: {
        color: 0xff0000, 
        strength: 0.4,
        pos: [0, -30, 40],
    },
}



export const MATERIALS_CONFIG = {
    'wall': {
        mat: 'MeshPhongMaterial',
        props: {
            side: THREE.DoubleSide,
            color: '#00c7ea',
            emissive: '#6205b0',
            bumpScale: 0.2,
            shininess: 100,
        },
    } 
}
