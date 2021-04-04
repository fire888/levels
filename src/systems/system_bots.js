import * as THREE from 'three'
import { FRAME_UPDATE } from '../constants/constants_elements'
import { MAT_IRON } from '../constants/constants_elements'


const S = 175.335
const H = 70
//const H_BOT = 14.193
const H_BOT = 14

export const createSystemBots = (assets, materials, emitter) => {
    const obj = assets.bot.scene.children[0]
    const bot  = obj.children[1]
    bot.material = materials.iron
    
    const animations = assets.bot.animations
    const mixer = new THREE.AnimationMixer(bot)
    const walkAction = mixer.clipAction(animations[0])
    walkAction.play()

    emitter.subscribe(FRAME_UPDATE)(data => {
       mixer.update(data.delta)
    })



    const objBots = {}
    const groupBots = new THREE.Group()

    obj.position.set(45, H_BOT, 0)
    groupBots.add(obj)

    
    emitter.subscribe('levelChanged')(({ typeLevelChange, instanceKey, objKey, kv }) => {
        if (instanceKey === 'room_01' && typeLevelChange === 'createRoom') {
             //objBots[objKey] = assets.bot.clone()
             obj.position.set(kv[0] * S + 30, kv[1] * H + H_BOT, kv[2] * S + 40)
             //groupBots.add(objBots[objKey])



      //      objBots[objKey] = assets.bot.clone()
      //      objBots[objKey].position.set(kv[0] * S + 30, kv[1] * H + H_BOT, kv[2] * S + 40)
      //      groupBots.add(objBots[objKey])
        }
        if (instanceKey === 'room_01' && typeLevelChange === 'destroyRoom') {
      //      groupBots.remove(objBots[objKey])
      //      objBots[objKey].children[0].geometry.dispose()
      //      objBots[objKey].children[0].material.dispose()
      //      delete objBots[objKey]
        }

        //let count = 0
        //for (let key in objBots) {
        //    count ++
        //}
        //console.log('bots: ', count)
    })

    // */
    return {
        groupBots,
    } 
} 