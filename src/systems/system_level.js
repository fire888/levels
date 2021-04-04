import {
    setItemToFloorsCollision,
    removeItemFromFloorsCollision, 
} from '../components/component_collisionFloor'
import {
    setItemToWallCollision,
    removeItemFromWallCollision,
} from '../components/component_collisionWalls'
import * as THREE from 'three'
import { S, H } from '../constants/constants_elements'



let eventEmitter = null




export function createLevel (emitter, rooms ) {
    eventEmitter = emitter

    let countModels = 0
    for (let key in rooms) countModels ++
    countModels -= 2

    const group = new THREE.Group()
    const objRooms = {}

    let isBotLevel = false


    const createRanKeyNotOne = () => {
        const r = Math.ceil(Math.random() * countModels)
        if (r !== 1) {
            return r
        } else {
            return createRanKeyNotOne()
        }
    }


    const createRoom = (kv, key) => {
        let instanceKey
        if (key) {
            instanceKey = key
        } else if (isBotLevel) {
            const r = createRanKeyNotOne()
            instanceKey = `room_0${ r }`
        } else {
            instanceKey = `room_0${ Math.ceil(Math.random() * countModels) }`
            if (instanceKey === 'room_01') {
                isBotLevel = true
            }
        }


        const objKey = `r_${kv[0]}_${kv[1]}_${kv[2]}` 

        const mesh = rooms[instanceKey].clone()
        mesh.position.set(kv[0] * S, kv[1] * H, kv[2] * S)
        setItemToFloorsCollision(mesh)
        setItemToWallCollision(mesh)
        group.add(mesh)
        objRooms[objKey] = mesh


        // const geometry = mesh.geometry
        // const wireframe = new THREE.WireframeGeometry( geometry );
        // const line = new THREE.LineSegments( wireframe );
        // line.material.color = { r: 0.5, g: 0.5, b: 0.5}
        // line.material.linewidth = 50
        // line.material.opacity = 0.5;
        // line.material.transparent = true;
        // mesh.add( line );

        emitter.emit('levelChanged')({
            typeLevelChange: 'createRoom',
            instanceKey,
            objKey,
            kv,
        })    

        instanceKey === 'room_06' && createRoom([kv[0], kv[1] + 1, kv[2]], 'room_dummy')
    }


    const removeRoom = kv => {
        const objKey = `r_${ kv[0] }_${ kv[1] }_${ kv[2] }`
        if (!objRooms[objKey]) return;

    
        const instanceKey = objRooms[objKey].name

        // objRooms[objKey].children[0].geometry.dispose()
        // objRooms[objKey].children[0].material.dispose()
        group.remove(objRooms[objKey])
        removeItemFromFloorsCollision(objRooms[objKey])
        removeItemFromWallCollision(objRooms[objKey])
        delete objRooms[objKey]

        if (instanceKey === 'room_01') {
            isBotLevel = false
        }

        emitter.emit('levelChanged')({
            typeLevelChange: 'destroyRoom',
            instanceKey,
            objKey,
            kv,
        })    

        instanceKey === 'room_dummy' && removeRoom([kv[0], kv[1] - 1, kv[2]])
        instanceKey === 'room_06' && removeRoom([kv[0], kv[1] + 1, kv[2]])
    }


    createRoom([0, -1, 0], 'room_02')
    createRoom([0, -1, -1], 'room_02')
    createRoom([-1, -1, 0], 'room_02')
    createRoom([1, -1, 0], 'room_02')


    const startLevel = rooms['mainLevel'].clone()
    setItemToFloorsCollision(startLevel)
    setItemToWallCollision(startLevel)
    group.add(startLevel)
    startLevel.position.set(0, -1 * H, 0)


    emitter.subscribe('destroyStartCorridor')(() => {
        removeItemFromFloorsCollision(startLevel)
        removeItemFromWallCollision(startLevel)
        group.remove(startLevel)
    })


    emitter.subscribe('changeLevel')(({ direction, oldQuadrant, newQuadrant }) => {

        const oldKv = oldQuadrant, curKv = newQuadrant
        // move west
        if (curKv[0] < oldKv[0]) {
            console.log('----------- west')
            // remove east
            removeRoom([oldKv[0] + 1, oldKv[1], oldKv[2]])

            // set center to east
            objRooms[`r_${curKv[0] + 1}_${curKv[1]}_${curKv[2]}`] = objRooms[`r_${oldKv[0]}_${oldKv[1]}_${oldKv[2]}`]

            // create west
            createRoom([oldKv[0] - 2, oldKv[1], oldKv[2]])

            // remove north
            removeRoom([oldKv[0], oldKv[1], oldKv[2] - 1])
            // create north
            createRoom([curKv[0], curKv[1], curKv[2] - 1])

            // remove south
            removeRoom([oldKv[0], oldKv[1], oldKv[2] + 1])
            // create soush
            createRoom([curKv[0], curKv[1], curKv[2] + 1])
        }

        // move east
        if (curKv[0] > oldKv[0]) {
            console.log('----------- east')
            // remove west
            removeRoom([oldKv[0] - 1, oldKv[1], oldKv[2]])

            // set center to east
            objRooms[`r_${curKv[0] - 1}_${curKv[1]}_${curKv[2]}`] = objRooms[`r_${oldKv[0]}_${oldKv[1]}_${oldKv[2]}`]

            // create east
            createRoom([oldKv[0] + 2, oldKv[1], oldKv[2]])

            // remove north
            removeRoom([oldKv[0], oldKv[1], oldKv[2] - 1])
            // create north
            createRoom([curKv[0], curKv[1], curKv[2] - 1])

            // remove south
            removeRoom([oldKv[0], oldKv[1], oldKv[2] + 1])
            // create south
            createRoom([curKv[0], curKv[1], curKv[2] + 1])
        }


        // move north
        if (curKv[2] < oldKv[2]) {
            console.log('-----------north')
            // remove south
            removeRoom([oldKv[0], oldKv[1], oldKv[2] + 1])

            // set center to south
            objRooms[`r_${ curKv[0] }_${ curKv[1] }_${ curKv[2] + 1 }`] = objRooms[`r_${ oldKv[0] }_${ oldKv[1] }_${ oldKv[2] }`]

            // create north
            createRoom([oldKv[0], oldKv[1], oldKv[2] - 2])

            // remove west
            removeRoom([oldKv[0] - 1, oldKv[1], oldKv[2]])
            // create west
            createRoom([curKv[0] - 1, curKv[1], curKv[2]])

            // remove east
            removeRoom([oldKv[0] + 1, oldKv[1], oldKv[2]])
            // create east
            createRoom([curKv[0] + 1, curKv[1], curKv[2]])
        }


        // move south
        if (curKv[2] > oldKv[2]) {
            console.log('-----------south')
            // remove north
            removeRoom([oldKv[0], oldKv[1], oldKv[2] - 1])

            // set center to north
            objRooms[`r_${ curKv[0] }_${ curKv[1] }_${ curKv[2] - 1 }`] = objRooms[`r_${ oldKv[0] }_${ oldKv[1] }_${ oldKv[2] }`]

            // create south
            createRoom([oldKv[0], oldKv[1], oldKv[2] + 2])

            // remove west
            removeRoom([oldKv[0] - 1, oldKv[1], oldKv[2]])
            // create west
            createRoom([curKv[0] - 1, curKv[1], curKv[2]])

            // remove east
            removeRoom([oldKv[0] + 1, oldKv[1], oldKv[2]])
            // create east
            createRoom([curKv[0] + 1, curKv[1], curKv[2]])
        }

        // move top
        if (curKv[1] > oldKv[1] || curKv[1] < oldKv[1]) {
            console.log('-----------top')
            // remove north
            removeRoom([oldKv[0], oldKv[1], oldKv[2] - 1])
            // create north
            createRoom([curKv[0], curKv[1], curKv[2] - 1])
            // remove south
            removeRoom([oldKv[0], oldKv[1], oldKv[2] + 1])
            // create south
            createRoom([curKv[0], curKv[1], curKv[2] + 1])
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


    return { group }
}
