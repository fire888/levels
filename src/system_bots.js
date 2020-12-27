import * as THREE from 'three'

const S = 175.335
const H = 70
//const H_BOT = 14.193
const H_BOT = 16

export const createSystemBots = (assets, emitter) => {

	const matIron = new THREE.MeshPhongMaterial({
		color: 0xffffff,
		emissive: 0x003388,
		specular: 0xffffff,
		shininess: 60,
		bumpMap: assets.botMapBump,
		bumpScale: 0.1,						
		envMap: assets.ironEnv,
        reflectivity: 0.5,
        map: assets.botMap,
        skinning: true,
    });

    const obj = assets.bot.scene.children[0]
    const m  = obj.children[1] 
    m.material = matIron
    
    const animations = assets.bot.animations
    const mixer = new THREE.AnimationMixer(m)
    const walkAction = mixer.clipAction(animations[0])
    walkAction.play()

    emitter.subscribe('frameUpdate')(data => {
       mixer.update(data.delta)
       obj.position.z += 0.05
    })



    const objBots = {}
    const groupBots = new THREE.Group()

    obj.position.set(45, H_BOT, 0)
    groupBots.add(obj)

    
    emitter.subscribe('levelChanged')(({ typeLevelChange, instanceKey, objKey, kv }) => {
        if (instanceKey === 'room_01' && typeLevelChange === 'createRoom') {
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