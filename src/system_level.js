import {
    setItemToFloorsCollision,
    removeItemFromFloorsCollision, 
} from './component_collisionFloor'
import {
    setItemToWallCollision,
    removeItemFromWallCollision,
} from './component_collisionWalls'

import * as THREE from 'three'

const S = 175.335
const nX = 4
const nZ = 4

export function createLevel (emitter, rooms, playerPos) {
    let countModels = 0
    for (let key in rooms) {
        countModels ++
    }

    const group = new THREE.Group()
    const objRooms = {}

    const checkerKvadrant = createCheckerKvadrant(playerPos)

    const createRoom = (kv, id) => {
        const mesh = rooms[`room_0${ Math.floor( id || Math.random() * countModels + 1) }`].clone()
        mesh.position.set(
            kv[0] * S, 
            kv[1] * S, 
            kv[2] * S,
        )
        setItemToFloorsCollision(mesh)
        setItemToWallCollision(mesh)
        group.add(mesh)
        objRooms[`r_${kv[0]}_${kv[1]}_${kv[2]}`] = mesh
    }

    const removeRoom = kv => {
        group.remove(objRooms[`r_${ kv[0] }_${ kv[1] }_${ kv[2] }`])
        removeItemFromFloorsCollision(objRooms[`r_${ kv[0] }_${ kv[1] }_${ kv[2] }`])
        removeItemFromWallCollision(objRooms[`r_${ kv[0] }_${ kv[1] }_${ kv[2] }`])
        delete objRooms[`r_${ kv[0] }_${ kv[1] }_${ kv[2] }`]
    }



    const kv = checkerKvadrant.currentKvadrant
    createRoom(kv, 1)
    createRoom([kv[0]-1, kv[1], kv[2]])
    createRoom([kv[0]+1, kv[1], kv[2]])
    createRoom([kv[0], kv[1], kv[2]-1])
    createRoom([kv[0], kv[1], kv[2]+1])
    

    emitter.subscribe('playerMove')(pos => {
        const data = checkerKvadrant.update(pos)
        if (!data.isChanged) return;

        const curKv = data.currentKvadrant
        const oldKv = data.oldKvadrant

        // move left 
        if (curKv[0] < oldKv[0]) {
            // remove right
            removeRoom([oldKv[0] + 1, oldKv[1], oldKv[2]])

            // set center to right
            objRooms[`r_${oldKv[0] + 1}_${oldKv[1]}_${oldKv[2]}`] = objRooms[`r_${oldKv[0]}_${oldKv[1]}_${oldKv[2]}`]

            // create left
            createRoom([oldKv[0] - 2, oldKv[1], oldKv[2]])

            // remove top
            removeRoom([oldKv[0], oldKv[1], oldKv[2] - 1])
            // createTop
            createRoom([curKv[0], curKv[1], curKv[2] - 1])

            // remove bottom
            removeRoom([oldKv[0], oldKv[1], oldKv[2] + 1])
            // create bottom
            createRoom([curKv[0], curKv[1], curKv[2] + 1])
        }

        // move right
        if (curKv[0] > oldKv[0]) {
            // remove left
            removeRoom([oldKv[0] - 1, oldKv[1], oldKv[2]])

            // set center to left
            objRooms[`r_${oldKv[0] - 1}_${oldKv[1]}_${oldKv[2]}`] = objRooms[`r_${oldKv[0]}_${oldKv[1]}_${oldKv[2]}`]

            // create right
            createRoom([oldKv[0] + 2, oldKv[1], oldKv[2]])

            // remove top
            removeRoom([oldKv[0], oldKv[1], oldKv[2] - 1])
            // createTop
            createRoom([curKv[0], curKv[1], curKv[2] - 1])

            // remove bottom
            removeRoom([oldKv[0], oldKv[1], oldKv[2] + 1])
            // create bottom
            createRoom([curKv[0], curKv[1], curKv[2] + 1])
        }


        // move top
        if (curKv[2] < oldKv[2]) {
            // remove bottom
            removeRoom([oldKv[0], oldKv[1], oldKv[2] + 1])

            // set center to bottom
            objRooms[`r_${ oldKv[0] }_${ oldKv[1] }_${ oldKv[2] + 1 }`] = objRooms[`r_${ oldKv[0] }_${ oldKv[1] }_${ oldKv[2] }`]

            // create top
            createRoom([oldKv[0], oldKv[1], oldKv[2] - 2])

            // remove left
            removeRoom([oldKv[0] - 1, oldKv[1], oldKv[2]])
            // create left
            createRoom([curKv[0] - 1, curKv[1], curKv[2]])

            // remove right
            removeRoom([oldKv[0] + 1, oldKv[1], oldKv[2]])
            // create right
            createRoom([curKv[0] + 1, curKv[1], curKv[2]])
        }


        // move bottom
        if (curKv[2] > oldKv[2]) {
            // remove top
            removeRoom([oldKv[0], oldKv[1], oldKv[2] - 1])

            // set center to top
            objRooms[`r_${ oldKv[0] }_${ oldKv[1] }_${ oldKv[2] - 1 }`] = objRooms[`r_${ oldKv[0] }_${ oldKv[1] }_${ oldKv[2] }`]

            // create bottom
            createRoom([oldKv[0], oldKv[1], oldKv[2] + 2])

            // remove left
            removeRoom([oldKv[0] - 1, oldKv[1], oldKv[2]])
            // create left
            createRoom([curKv[0] - 1, curKv[1], curKv[2]])

            // remove right
            removeRoom([oldKv[0] + 1, oldKv[1], oldKv[2]])
            // create right
            createRoom([curKv[0] + 1, curKv[1], curKv[2]])
        }


    })

    return {
        group,
    }
}



const createCheckerKvadrant = function (pos) {
    const oldKvadrant = [Math.floor(pos.x / S), Math.floor(pos.y / S), Math.floor(pos.z / S)]
    const currentKvadrant = [Math.floor(pos.x / S), Math.floor(pos.y / S), Math.floor(pos.z / S)]

    return {
        update (pos) {
            currentKvadrant[0] = Math.floor(pos.x / S)
            currentKvadrant[1] = Math.floor(pos.y / S)
            currentKvadrant[2] = Math.floor(pos.z / S)

            const returnData = { isChanged: false }
            if (
                currentKvadrant[0] !== oldKvadrant[0] ||
                currentKvadrant[1] !== oldKvadrant[1] ||
                currentKvadrant[2] !== oldKvadrant[2]
            ) {
                returnData.currentKvadrant = [currentKvadrant[0], currentKvadrant[1], currentKvadrant[2]]
                returnData.oldKvadrant = [oldKvadrant[0], oldKvadrant[1], oldKvadrant[2]]
                returnData.isChanged = true


                oldKvadrant[0] = currentKvadrant[0]
                oldKvadrant[1] = currentKvadrant[1] 
                oldKvadrant[2] = currentKvadrant[2]
            }

            return returnData
        },
        currentKvadrant, 
    }
}