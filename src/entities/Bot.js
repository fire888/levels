import * as THREE from 'three'
import { GLTFCopy } from '../helpers/util_glTFcopy'

export class Bot {
    constructor () {
        this.inScene = false


        this.container = new THREE.Group()
        

        this._objFrom = new THREE.Object3D()
        this.container.add(this._objFrom)


        this._objTo = new THREE.Object3D()
        this._objTo.position.set(0, 0, 5)
        this.container.add(this._objTo)


        const copy = GLTFCopy(Bot.botScene)
        this.model = copy.scene.children[0]
        this.model.children[1].material = Bot.botMaterial
        this._animations = Bot.botScene.animations
        this._mixer = new THREE.AnimationMixer(this.model.children[1])
        this._walkAction = this._mixer.clipAction(this._animations[0])
        this._walkAction.play()


        this.container.add(this.model)
    }


    update (data) {
        this._mixer.update(data.delta)

        if (!this._componentCollision) return;

        const isNear = this._componentCollision.check()
        this.container.translateZ(0.1) 
    }


    setCollisionMesh (mesh) {
        this._collisionMeshes = [mesh]
        this.container.add(mesh)

        this._componentCollision = createComponentCollisionWalls(this._objFrom, this._objTo, 7, this._collisionMeshes)
    }

    removeCollisionMesh () {
        this._collisionMesh = null
        this._componentCollision = null
    }
}

Bot.botScene = null
Bot.botMaterial = null







export const createComponentCollisionWalls = (objFrom, objTo, offset, arrWalls) => {
    const vec3Src2 = new THREE.Vector3()
    const vec3Ray2 = new THREE.Vector3()

    return {
        check: () => {
            objTo.getWorldPosition(vec3Ray2)
            vec3Src2.copy(objFrom.position)
            vec3Ray2.sub(vec3Src2)

            const raycasterWalls = new THREE.Raycaster(vec3Src2, vec3Ray2)
            const intersectsWalls = raycasterWalls.intersectObjects(arrWalls)

            console.log(intersectsWalls)
            return intersectsWalls[0] && intersectsWalls[0].distance < offset
        }
    }
}