import { MATERIALS_CONFIG } from '../constants/constants_elements'



export function prepareMeshesFromAssets (assets) {

    const
        arrMeshes = [],
        materials = createMaterials(assets),
        rooms = {}

    assets['level-rooms'].traverse(child => {
        if (child.name.includes("room_")) {
            //const mesh = new THREE.Mesh(child.geometry, materials.wall)
            const mesh = new THREE.Mesh(child.geometry)
            rooms[child.name] = mesh
            mesh.name = child.name
        }
        if (child.name.includes("mainLevel")) {
            const mesh = new THREE.Mesh(child.geometry)
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
        mats[key] = new THREE[MATERIALS_CONFIG[key].mat]({
            ...MATERIALS_CONFIG[key].props
        })
        MATERIALS_CONFIG[key].props.bumpMap && (mats[key].bumpMap = assets[MATERIALS_CONFIG[key].props.bumpMap])
        MATERIALS_CONFIG[key].props.envMap && (mats[key].envMap = assets[MATERIALS_CONFIG[key].props.envMap])
        MATERIALS_CONFIG[key].props.map && (mats[key].map = assets[MATERIALS_CONFIG[key].props.map])
    }
    return mats
}

