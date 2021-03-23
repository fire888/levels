import { MATERIALS_CONFIG } from './constants_elements'



export function prepareMeshesFromAssets (assets) {

    const
        arrMeshes = [],
        materials = createMaterials(assets),
        rooms = {}

    assets['level-rooms'].traverse(child => {
        console.log(child.name)
        // if (child.name.includes("room_")) {
        //     const mesh = new THREE.Mesh(child.geometry, materials.matWall)
        //     rooms[child.name] = mesh
        //     mesh.name = child.name
        // }
        if (child.name.includes("mainLevel")) {
            const mesh = new THREE.Mesh(child.geometry, materials.matWall)
            rooms[child.name] = mesh
            mesh.name = child.name
        }
    })

    return {
        arrMeshes,
        materials,
        rooms,
    }
}



const createMaterials = assets => {
    const mats = {}
    for (let key in MATERIALS_CONFIG) {
        mats[key] = new THREE[MATERIALS_CONFIG[key].mat](MATERIALS_CONFIG[key].props) 
    }

    mats.matWall = new THREE.MeshPhongMaterial({
        // wireframe: true,
        //map: assets.mapWalls,
        //bumpScale: assets.bumpWalls,
        //bumpScale: 0.2,
    })
    return mats
}

