import { MATERIALS_CONFIG } from '../constants/constants_elements'



export function prepareMeshesFromAssets (assets) {
    const
        materials = createMaterials(assets),
        rooms = {},
        allMeshes = {}

    assets['level-rooms'].traverse(child => {
        if (child.name.includes("room_")) {
            const mesh = new THREE.Mesh(child.geometry)
            rooms[child.name] = mesh
            mesh.name = child.name
            allMeshes[child.name] = mesh
        }
        if (child.name.includes("mainLevel")) {
            const mesh = new THREE.Mesh(child.geometry)
            mesh.name = child.name
            allMeshes[child.name] = mesh
        }
        if (child.name.includes("outer_road")) {
            const mesh = new THREE.Mesh(child.geometry, materials.green)
            mesh.name = child.name
            allMeshes[child.name] = mesh
        }
        if (child.name.includes("outer_floor")) {
            const mesh = new THREE.Mesh(child.geometry, materials.road)
            mesh.name = child.name
            allMeshes[child.name] = mesh
        }  
    })

    return {
        rooms,
        allMeshes,
        materials,
    }
}



const createMaterials = assets => {
    for (let key in assets) 
        assets[key].wrapS && (assets[key].wrapS = assets[key].wrapT = THREE.RepeatWrapping)

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
