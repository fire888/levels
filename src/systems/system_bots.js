import * as THREE from 'three'
import { FRAME_UPDATE } from '../constants/constants_elements'
import { MAT_IRON } from '../constants/constants_elements'
import { Bot } from '../entities/Bot'
import { pr } from '../componentsReact/App'
import { toggleDialog } from '../store/actions'


const S = 175.335
const H = 70
//const H_BOT = 14.193
const H_BOT = 14




export const createSystemBots = (assets, materials, emitter) => {
    Bot.botMaterial = materials.iron
    Bot.botScene = assets.bot



    const groupBots = new THREE.Group()
    const arrBots = []



    for (let i = 0; i < 5; ++i) {
        const bot = new Bot()
        groupBots.add(bot.container)
        bot.container.position.set(-30 + i * 30, -92, 750)
        bot.inScene = 'aaa'
        bot.setCollisionMesh(assets.collisionsBotsRooms['collision_r_01'].clone())
        arrBots.push(bot)
    }




    emitter.subscribe(FRAME_UPDATE)(data => {
        for (let i = 0; i < arrBots.length; ++i) arrBots[i].inScene && arrBots[i].update(data)
    })


    emitter.subscribe('destroyStartCorridor')(() => {
        for (let i = 0; i < arrBots.length; ++i) {
            arrBots[i].inScene = null
            arrBots[i].container.position.y = -10000
            arrBots[i].removeCollisionMesh()
        }
    })

    emitter.subscribe('levelChanged')(({ typeLevelChange, instanceKey, objKey, kv, isAddBot, isRemoveBot }) => {
        if (isAddBot) {
            for (let i = 0; i < arrBots.length; ++i) {
                if (!arrBots[i].inScene) {
                    arrBots[i].inScene = objKey
                    arrBots[i].container.position.set(kv[0] * S, kv[1] * H + H_BOT, kv[2] * S)
                    arrBots[i].setCollisionMesh(assets.collisionsBotsRooms['collision_r_01'].clone())
                    break;
                }
            }
        }
        if (isRemoveBot) {
            for (let i = 0; i < arrBots.length; ++i) {
                if (arrBots[i].inScene === objKey) {
                    arrBots[i].inScene = null
                    arrBots[i].container.position.y = -10000
                    arrBots[i].removeCollisionMesh()
                }
            } 
        }
    })


    emitter.subscribe('playerMove')(pos => {
        for (let i = 0; i < arrBots.length; ++i) {
            //if (!arrBots[i].inScene && arrBots[i]._state === 'say') continue;
            if (!arrBots[i].inScene) continue;

            const botWorldPos = new THREE.Vector3()
            arrBots[i]._modelGroup.getWorldPosition(botWorldPos)
            const distance = botWorldPos.distanceTo(pos)


            if (arrBots[i]._state === 'say' && distance > 30) {
                arrBots[i]._startRotate()
                toggleDialog(pr.dispatch).toggleButtonDialog(false)
                continue;
            }


            if (arrBots[i]._state !== 'say' && distance < 30) {
                arrBots[i].prepareToSay(pos)
                toggleDialog(pr.dispatch).toggleButtonDialog(true)


                continue;
            }
        }
    })


    return {
        groupBots,
    } 
}


