import {
    START_LAYER_STATE,
    CHANGE_LAYER_STATE,
} from '../constants_elements'



let levelState = START_LAYER_STATE



export const getLevelStateByChangeQuadrant = (playerOldQ, playerNewQ) => {
    for (let i = 0; i < CHANGE_LAYER_STATE.length; ++i) {
        const data = getData(
            [...playerOldQ],
            [...playerNewQ],
            {
                ...CHANGE_LAYER_STATE[i],
                oldQuadrant: [...CHANGE_LAYER_STATE[i].oldQuadrant],
                newQuadrant: [...CHANGE_LAYER_STATE[i].newQuadrant],
            }
        )
        if (data) return data;
    }
    return { levelState }
}




const getData = (playerOldQ, playerNewQ, conf) => {
    const { oldState, newState, oldQuadrant, newQuadrant, emitData } = conf

    if (levelState !== oldState)
        return;


    if (oldQuadrant[0] === 'ANY') oldQuadrant[0] = playerOldQ[0]
    if (oldQuadrant[1] === 'ANY') oldQuadrant[1] = playerOldQ[1]
    if (oldQuadrant[2] === 'ANY') oldQuadrant[2] = playerOldQ[2]

    if (newQuadrant[0] === 'ANY') newQuadrant[0] = playerNewQ[0]
    if (newQuadrant[1] === 'ANY') newQuadrant[1] = playerNewQ[1]
    if (newQuadrant[2] === 'ANY') newQuadrant[2] = playerNewQ[2]

    if (newQuadrant[0] === 'ANY_PLUS_ONE') newQuadrant[0] = playerOldQ[0] + 1
    if (newQuadrant[1] === 'ANY_PLUS_ONE') newQuadrant[1] = playerOldQ[1] + 1
    if (newQuadrant[2] === 'ANY_PLUS_ONE') newQuadrant[2] = playerOldQ[2] + 1



    if (
        oldQuadrant[0] !== playerOldQ[0] ||
        oldQuadrant[1] !== playerOldQ[1] ||
        oldQuadrant[2] !== playerOldQ[2] ||
        newQuadrant[0] !== playerNewQ[0] ||
        newQuadrant[1] !== playerNewQ[1] ||
        newQuadrant[2] !== playerNewQ[2]
    ) return;


    levelState = newState

    return { levelState, emitData }
}

