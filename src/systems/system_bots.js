import * as THREE from 'three'
import { FRAME_UPDATE } from '../constants/constants_elements'
import { MAT_IRON } from '../constants/constants_elements'
import { Bot } from '../entities/Bot'



const S = 175.335
const H = 70
//const H_BOT = 14.193
const H_BOT = 14




export const createSystemBots = (assets, materials, emitter) => {
    Bot.botMaterial = materials.iron
    Bot.botScene = assets.bot


    console.log('---', assets)

    const groupBots = new THREE.Group()
    const arrBots = []



    for (let i = 0; i < 5; ++i) {
        const bot = new Bot()
        groupBots.add(bot.model)
        bot.model.position.set(70 + i * 20, -88, -900)
        arrBots.push(bot)
    }




    emitter.subscribe(FRAME_UPDATE)(data => {
        for (let i = 0; i < arrBots.length; ++i) arrBots[i].inScene && arrBots[i].update(data)
    })



    emitter.subscribe('levelChanged')(({ typeLevelChange, instanceKey, objKey, kv, isAddBot, isRemoveBot }) => {        
        if (isAddBot) {
            for (let i = 0; i < arrBots.length; ++i) {
                if (!arrBots[i].inScene) {
                    arrBots[i].inScene = objKey
                    arrBots[i].model.position.set(kv[0] * S + 55, kv[1] * H + H_BOT, kv[2] * S + 75)
                    arrBots[i].setCollisionMesh(assets.collisionsBotsRooms['collision_r_01'].clone())
                    //arrBots[i].walls = assets.collisionsBotsRooms['collision_r_01'].clone()
                    break;
                }
            }
        }
        if (isRemoveBot) {
            for (let i = 0; i < arrBots.length; ++i) {
                if (arrBots[i].inScene === objKey) {
                    arrBots[i].inScene = null
                    arrBots[i].model.position.y = -10000
                    arrBots[i].removeCollisionMesh()
                }
            } 
        }
    })


    return {
        groupBots,
    } 
}


