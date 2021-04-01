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

import levelRoomsSrc from './assets/level-rooms.obj'

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


/** size element */
export const S = 175.335
export const H = 70



/** emitter constants */
export const FRAME_UPDATE = 'FRAME_UPDATE'


export const FLOORS_CONF = {
    '-2': {
        'outer': { fogNear: 20, fogFar: 500, color: 0x07627c },
        'custom': { fogNear: 20, fogFar: 500, color: 0x07627c },
        'default': { fogNear: -40, fogFar: 150, color: 0x8805a8 },
    },
    '-1': {
        'outer': { fogNear: 20, fogFar: 500, color: 0x07627c },
        'custom': { fogNear: 20, fogFar: 150, color: 0x201824 },
        'custom2': { fogNear: 20, fogFar: 150, color: 0x583313 },
        'default': { fogNear: -40, fogFar: 150, color: 0x8805a8 },
    },
    '0': {
        'custom': { fogNear: 20, fogFar: 500, color: 0xffffff },
        'default': { fogNear: -40, fogFar: 150, color: 0x312943 },
    },
    '1': {
        'custom': { fogNear: 20, fogFar: 500, color: 0xffffff },
        'default': { fogNear: 0, fogFar: 50, color: 0x1e1a05 },
    },
    '2': {
        'custom': { fogNear: 20, fogFar: 500, color: 0xffffff },
        'default': { fogNear: 0, fogFar: 80, color: 0x0a1763 },
    },
    '3': {
        'custom': { fogNear: 20, fogFar: 500, color: 0xffffff },
        'default': { fogNear: 0, fogFar: 80, color: 0x0a6340 },
    },
    '4': {
        'custom': { fogNear: 20, fogFar: 500, color: 0xffffff },
        'default': { fogNear: 0, fogFar: 80, color: 0xac0000 },
    },
}




//export const START_LAYER_STATE = 'outer'
export const START_LAYER_STATE = 'corridor'

export const CHANGE_LAYER_STATE = [
    /** ********************************************************/
    {
        oldState: 'outer', newState: 'corridor',
        oldQuadrant: [0, -2, 4], newQuadrant: [0, -2, 3],
        emitData: {
            type: 'changeEnvironment',
            params: { mode: 'default' }
        },
    },
    {
        oldState: 'corridor', newState: 'outer',
        oldQuadrant: [0, -2, 3], newQuadrant: [0, -2, 4],
        emitData: {
            type: 'changeEnvironment',
            params: { mode: 'outer' }
        },
    },

    /** ********************************************************/
    {
        oldState: 'corridor', newState: 'firstRoom',
        oldQuadrant: [0, -1, 2], newQuadrant: [0, -1, 1],
        emitData: {
            type: 'changeEnvironment',
            params: { mode: 'custom2' }
        },
    },
    {
        oldState: 'firstRoom', newState: 'corridor',
        oldQuadrant: [0, -1, 1], newQuadrant: [0, -1, 2],
        emitData: {
            type: 'changeEnvironment',
            params: { mode: 'custom' }
        },
    },

    /** ********************************************************/

    {
        oldState: 'firstRoom', newState: 'playLevel',
        oldQuadrant: [0, -1, 0], newQuadrant: [0, -1, -1],
        emitData: {
            type: 'destroyStartCorridor',
            params: { mode: 'default' }
        },
    },
    {
        oldState: 'firstRoom', newState: 'playLevel',
        oldQuadrant: [0, -1, 0], newQuadrant: [-1, -1, 0],
        emitData: {
            type: 'destroyStartCorridor',
            params: { mode: 'default' }
        },
    },
    {
        oldState: 'firstRoom', newState: 'playLevel',
        oldQuadrant: [0, -1, 0], newQuadrant: [1, -1, 0],
        emitData: {
            type: 'destroyStartCorridor',
            params: { mode: 'default' }
        },
    },

    /** ********************************************************/

    {
        oldState: 'playLevel', newState: 'playLevel',
        oldQuadrant: ['ANY', 'ANY', 'ANY'], newQuadrant: ['ANY', 'ANY_PLUS_ONE', 'ANY'],
        emitData: {
            type: 'changeEnvironment',
            params: { mode: 'default' }
        },
    },
]




export const studioConfig = {
    canId: 'webgl-canvas',
    rendererCon: {
        antialias: true
    },
    clearColor: FLOORS_CONF[-1]['outer'].color,
    backgroundColor: FLOORS_CONF[-1]['outer'].color,
    amb: {
        color: FLOORS_CONF[-1]['outer'].color,
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
    //startPos: [100, -60, 1000],
    startPos: [90, -10, 360.7140705920112], // beginPlay
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

