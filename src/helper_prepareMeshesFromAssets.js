import { MATERIALS_CONFIG } from './constants_elements'



export function prepareMeshesFromAssets (assets) {

    const
        arrMeshes = [],
        levelGroup = new THREE.Group(),
        materials = createMaterials(assets),
        rooms = {}

    assets['level-rooms'].traverse(child => {
        if (child.name.includes("room_")) {
            const mesh = new THREE.Mesh(child.geometry, materials.matWall)
            rooms[child.name] = mesh
            mesh.name = child.name
        }
    })

    assets['level'].traverse(child => {
        if (child.name.includes("room_")) {
            const mesh = new THREE.Mesh(child.geometry, materials.matWall)
            levelGroup.add(mesh)
            arrMeshes.push(mesh)
        }
    })




    return {
        arrMeshes,
        levelGroup,
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
        //wireframe: true,
        //map: assets.mapWalls,
        //bumpScale: assets.bumpWalls,
        //bumpScale: 0.2,
    })
    return mats
}

