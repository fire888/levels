import {
    START_FLOOR,
    START_LAYER_STATE,
    CHANGE_LAYER_STATE,
} from '../constants_elements'



let oldFloor = START_FLOOR
let levelState = START_LAYER_STATE//'startLevel' // || 'startPlayLevel' || 'playLevel'




export const getLevelStateByChangeQuadrant = (playerOldQ, playerNewQ) => {
    for (let i = 0; i < CHANGE_LAYER_STATE.length; ++i) {
        const data = getData(playerOldQ, playerNewQ, CHANGE_LAYER_STATE[i])
        if (data) return data;
    }
    return { levelState }
}




const getData = (playerOldQ, playerNewQ, conf) => {
    const { oldState, newState, oldQuadrant, newQuadrant, emitData } = conf

    if (levelState !== oldState)
        return;

    if (
        oldQuadrant[0] !== playerOldQ[0] ||
        oldQuadrant[1] !== playerOldQ[1] ||
        oldQuadrant[2] !== playerOldQ[2]
    ) return;

    if (
        newQuadrant[0] !== playerNewQ[0] ||
        newQuadrant[1] !== playerNewQ[1] ||
        newQuadrant[2] !== playerNewQ[2]
    ) return;

    levelState = newState

    return { levelState, emitData }
}











// export const getLevelStateByChangeKvadrant = (oldKv, newKv) => {
//     if (currentLevelState === 'startLevel') {
//         if (
//             oldKv[0] === 0 && oldKv[1] === -1 && oldKv[2] === 2 &&
//             newKv[0] === 0 && newKv[1] === -1 && newKv[2] === 1
//         ) {
//             currentLevelState = 'startPlayLevel'
//             eventEmitter.emit('changeEnviroment')({ mode: 'toInner' })
//         }
//     } else if (currentLevelState === 'startPlayLevel') {
//         if (
//             oldKv[0] === 0 && oldKv[1] === -1 && oldKv[2] === 1 &&
//             newKv[0] === 0 && newKv[1] === -1 && newKv[2] === 2
//         ) {
//             currentLevelState = 'startLevel'
//             eventEmitter.emit('changeEnviroment')({ mode: 'toOuter' })
//         }
//
//
//         if (
//             oldKv[0] === 0 && oldKv[1] === -1 && oldKv[2] === 0 &&
//             newKv[2] !== 1
//         ) {
//             currentLevelState = 'removeStartLevel'
//         }
//     } else if (currentLevelState === 'removeStartLevel') {
//         currentLevelState = 'playLevel'
//     } else if (currentLevelState === 'playLevel' && oldFloor !== newKv[1]) {
//         console.log('LEVEL', newKv[1])
//         eventEmitter.emit('changeEnviroment')({ mode: 'toUp', level: newKv[1] })
//         oldFloor = newKv[1]
//     }
//     return currentLevelState
// }