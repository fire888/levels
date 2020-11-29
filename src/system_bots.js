import * as THREE from 'three'

const S = 175.335
const H = 70
const H_BOT = 14.193

export const createSystemBots = (botModel, emitter) => {
    const objBots = {}
    const groupBots = new THREE.Group()

    emitter.subscribe('levelChanged')(({ typeLevelChange, instanceKey, objKey, kv }) => {
        if (instanceKey === 'room_01' && typeLevelChange === 'createRoom') {
            objBots.objKey = botModel.clone()
            objBots.objKey.position.set(kv[0] * S + 30, kv[1] * H + H_BOT, kv[2] * S + 40)
            groupBots.add(objBots.objKey)
            console.log('groupBots', groupBots)
        }
        //if (typeLevelChange)
    })
    //botModel.position.set(0, 20, 0)
    //groupBots.add(botModel) 

    return {
        groupBots,
    } 
} 