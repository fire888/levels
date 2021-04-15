import * as THREE from 'three'
import { GLTFCopy } from '../helpers/util_glTFcopy'

export class Bot {
    constructor () {
        this.inScene = false

        this.container = new THREE.Group()

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
    }

    setCollisionMesh (mesh) {
        this._collisionMeshes = [mesh]
        //this.container.add(this._collisionMesh)

        //this.componentCollision = createComponentCollisionWalls(this.model)
    }

    removeCollisionMesh () {
        this._collisionMesh = null
    }
}

Bot.botScene = null
Bot.botMaterial = null




export const createComponentCollisionWalls = (objFromLink, objToLink, offset) => {
    const offsetWallCollision = offset
    const objFrom = objFromLink
    const objTo = objToLink

    const vec3Src2 = new THREE.Vector3()
    const vec3Ray2 = new THREE.Vector3()

    return {
        check: () => {
            objTo.getWorldPosition(vec3Ray2)
            vec3Src2.copy(objFrom.position)
            vec3Ray2.sub(vec3Src2)

            const raycasterWalls = new THREE.Raycaster(vec3Src2, vec3Ray2)
            const intersectsWalls = raycasterWalls.intersectObjects(WALLS_ARRAY)

            return intersectsWalls[0] && intersectsWalls[0].distance < offsetWallCollision
        }
    }

}