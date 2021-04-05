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
    const mapsKeys = ['bumpMap', 'envMap', 'map']
    const materials = {}
    for (let key in MATERIALS_CONFIG) {
        materials[key] = new THREE[MATERIALS_CONFIG[key].mat]({
            ...MATERIALS_CONFIG[key].props
        })
        mapsKeys.map(keyMap =>
            MATERIALS_CONFIG[key].props[keyMap] &&
            (materials[key][keyMap] = assets[MATERIALS_CONFIG[key].props[keyMap]])
        )
    }
    return materials
}
