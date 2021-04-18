import { DoubleSide } from 'three'

//import '../assets/start-img.png'
//import '../../public/progress-img.png'

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

import mapBump from '../assets/map-walls-bump.png'
import levelRoomsSrc from '../assets/level-rooms.obj'
import mapFloorOuter from '../assets/floor_outer_map.jpg'

import botMap from '../assets/botMap.png'
import botSrc from '../assets/botAnim.glb'




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
        filename: mapBump,
        key: 'bumpWalls',
    }, {
        type: 'img',
        filename: mapFloorOuter,
        key: 'mapFloorOuter',
        wrap: true,
},]




export const MATERIALS_CONFIG = {
    'wall': {
        mat: 'MeshPhongMaterial',
        props: {
            color: 0xffffff,
            emissive: 0x003388,
            specular: 0xffffff,
            shininess: 60,
            bumpMap: 'bumpWalls',
            bumpScale: 0.1,
            envMap: 'skyBox',
            reflectivity: 0.5,
            map: 'bumpWalls',
        },
    },
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
        'outer': { fogNear: 20, fogFar: 500, color: 0x18257d },
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



//const MAX_CHANGED_LEVELS = 5

export const START_LAYER_STATE = 'outer'
//export const START_LAYER_STATE = 'corridor'

export const CHANGE_LAYER_STATE = [
    /** ********************************************************/
    {
        oldState: 'outer', newState: 'corridor',
        oldQuadrant: [0, -2, 4], newQuadrant: [0, -2, 3],
        emitData: [
            {
                emitKey: 'changeEnvironment',
                environmentMode: 'corridorLight',
            },
            {
                emitKey: 'toggleImgSceneBack',
                backgroundImg: false,
            },
        ],
    },
    {
        oldState: 'corridor', newState: 'outer',
        oldQuadrant: [0, -2, 3], newQuadrant: [0, -2, 4],
        emitData: [
            {
                emitKey: 'changeEnvironment',
                environmentMode: 'outer',
            },
        ]
    },

    /** ********************************************************/
    {
        oldState: 'corridor', newState: 'firstRoom',
        oldQuadrant: [0, -1, 2], newQuadrant: [0, -1, 1],
        emitData: [
            {
                emitKey: 'changeEnvironment',
                environmentMode: 'firstRoomLight',
            }
        ],
    },
    {
        oldState: 'firstRoom', newState: 'corridor',
        oldQuadrant: [0, -1, 1], newQuadrant: [0, -1, 2],
        emitData: [
            {
                emitKey: 'changeEnvironment',
                environmentMode: 'corridorLight',
            },
        ],
    },

    /** ********************************************************/

    {
        oldState: 'firstRoom', newState: 'playLevel',
        oldQuadrant: [0, -1, 0], newQuadrant: [0, -1, 'ANY_MINUS_ONE'],
        emitData: [
            {
                emitKey: 'destroyStartCorridor'
            },
            {
                 emitKey: 'changeLevel'
            },
        ],
    },
    {
        oldState: 'firstRoom', newState: 'playLevel',
        oldQuadrant: [0, -1, 0], newQuadrant: ['ANY_MINUS_ONE', -1, 0],
        emitData: [
            {
                emitKey: 'destroyStartCorridor'
            },
            {
                 emitKey: 'changeLevel'
            },
        ],
    },
    {
        oldState: 'firstRoom', newState: 'playLevel',
        oldQuadrant: [0, -1, 0], newQuadrant: ['ANY_PLUS_ONE', -1, 0],
        emitData: [
            {
                emitKey: 'destroyStartCorridor'
            },
            {
                emitKey: 'changeLevel'
            },
        ],
    },

    /** ********************************************************/

    {
        oldState: 'playLevel', newState: 'playLevel',
        oldQuadrant: ['ANY', 'ANY', 'ANY'], newQuadrant: ['ANY', 'ANY_PLUS_ONE', 'ANY'],
        emitData: [
            {
                emitKey: 'changeEnvironment',
                environmentMode: 'default',
            },
            {
                emitKey: 'changeLevel',
                counter: () => 0,
            }
        ],
    },


    {
        oldState: 'playLevel', newState: 'playLevel',
        oldQuadrant: ['ANY', 'ANY', 'ANY'], newQuadrant: ['ANY', 'ANY_MINUS_ONE', 'ANY'],
        emitData: [
            {
                emitKey: 'changeEnvironment',
                environmentMode: 'default',
            },
            {
                emitKey: 'changeLevel',
            }
        ],
    },


    /** ********************************************************/

    {
        oldState: 'playLevel', newState: 'playLevel',
        oldQuadrant: ['ANY', 'ANY', 'ANY'], newQuadrant: ['ANY', 'ANY', 'ANY_MINUS_ONE'],
        emitData: [
            {
                emitKey: 'changeLevel',
                counter: val => ++val,
            },
        ],
    },

    {
        oldState: 'playLevel', newState: 'playLevel',
        oldQuadrant: ['ANY', 'ANY', 'ANY'], newQuadrant: ['ANY_MINUS_ONE', 'ANY', 'ANY'],
        emitData: [
            {
                emitKey: 'changeLevel',
                counter: val => ++val,
            },
        ],
    },

    {
        oldState: 'playLevel', newState: 'playLevel',
        oldQuadrant: ['ANY', 'ANY', 'ANY'], newQuadrant: ['ANY_PLUS_ONE', 'ANY', 'ANY'],
        emitData: [
            {
                emitKey: 'changeLevel',
                counter: val => ++val,
            },
        ],
    },

    {
        oldState: 'playLevel', newState: 'playLevel',
        oldQuadrant: ['ANY', 'ANY', 'ANY'], newQuadrant: ['ANY', 'ANY', 'ANY_PLUS_ONE'],
        emitData: [
            {
                emitKey: 'changeLevel',
                counter: val => ++val,
            },
        ],
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
    //speed: 0.35,
    speed: 0.8,
    speedRot: 0.02,
    speedDown: -0.25,
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
