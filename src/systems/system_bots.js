import * as THREE from 'three'
import { FRAME_UPDATE } from '../constants/constants_elements'
import { MAT_IRON } from '../constants/constants_elements'
import { GLTFCopy } from '../helpers/util_glTFcopy'


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
        groupBots.add(bot.model)
        bot.model.position.set(70 + i * 20, -88, 900)
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
                    break;
                }
            }
        }
        if (isRemoveBot) {
            for (let i = 0; i < arrBots.length; ++i) {
                if (arrBots[i].inScene === objKey) {
                    arrBots[i].inScene = null
                    arrBots[i].model.position.y = -10000
                    break;
                }
            } 
        }
    })

    return {
        groupBots,
    } 
}





class Bot {
    constructor () {
        this.inScene = false

        const copy = GLTFCopy(Bot.botScene)
        this.model = copy.scene.children[0]
        this.model.children[1].material = Bot.botMaterial
        this._animations = Bot.botScene.animations
        this._mixer = new THREE.AnimationMixer(this.model.children[1])
        this._walkAction = this._mixer.clipAction(this._animations[0])
        this._walkAction.play()
    }

    update (data) {
        this._mixer.update(data.delta)
    }
}

Bot.botScene = null
Bot.botMaterial = null
