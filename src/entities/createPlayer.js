import * as THREE from 'three'

import { playerConfig } from '../constants/constants_elements'

import { createComponentCollisionFloors } from '../components/component_collisionFloor'
import { createComponentCollisionWalls } from '../components/component_collisionWalls'
import { createCheckerNearItem } from '../components/component_checkNearItem'

import { FRAME_UPDATE } from '../constants/constants_elements'



export function createPlayer (emitterLink) {
    const emitter = emitterLink

    const {
        startPos,
        startRot,
        cameraData,
        frontObjPos,
        lightDataOne,
        lightDataTwo,
        speed,
        offsetFromFloor,
        offsetFromFloorFactor,
        speedDown,
        offsetWallCollision,
        speedRot,
    } = playerConfig


    let camera
    let keys = {}
    let isButtonsDisabled = false
    let isBlocked = true

    const mainObj = new THREE.Object3D()
    mainObj.position.fromArray(startPos)
    mainObj.rotation.fromArray(startRot)

    const frontObj = new THREE.Object3D()
    frontObj.position.fromArray(frontObjPos)
    mainObj.add(frontObj)
  
    {
        const { fov, ratio, near, far, pos } = cameraData
        camera = new THREE.PerspectiveCamera(fov, ratio, near, far)
        camera.position.fromArray(pos)
        mainObj.add(camera)
    }

    {
        const { color, strenth, pos } = lightDataOne
        const light = new THREE.PointLight(color, strenth)
        light.position.fromArray(pos)
        mainObj.add(light)
    }

    {
      //const { color, strenth, pos } = lightDataTwo
      //const light = new THREE.PointLight(color, strenth)
      //light.position.fromArray(pos)
      //mainObj.add(light)
    }

    const checkFloors = createComponentCollisionFloors(mainObj, offsetFromFloor, offsetFromFloorFactor, speedDown)
    const checkWalls = createComponentCollisionWalls(mainObj, frontObj, offsetWallCollision)
    const checkNearItem = createCheckerNearItem(mainObj, emitter) 

    const update = data => {
        if (isButtonsDisabled) return;
        if (isBlocked) return;

        checkFloors.check(data)

        if (!keys) return;

        if (keys['up']) {
            if (checkWalls.check()) return;

            mainObj.translateZ(-speed * data.count)
            //console.log(mainObj.position.x, mainObj.position.z,  mainObj.position.y)
            checkNearItem()
            emitter.emit('playerMove')(mainObj.position)
        }
        keys['left'] && (mainObj.rotation.y += (speedRot * data.count))
        keys['right'] && (mainObj.rotation.y -= (speedRot * data.count))
    }


    emitter.subscribe('keyEvent')(data => keys = data)
    emitter.subscribe(FRAME_UPDATE)(update)
    emitter.subscribe('toggleDialog')(val => isButtonsDisabled = val.isOpen)


    return {
        start: () => { 
            isBlocked = false
            checkFloors.start()
        },
        getObj: () => mainObj,
        getCamera: () => camera,
        setToPos: (x, y, z) => mainObj.position.set(x, y, z)
    }
}

