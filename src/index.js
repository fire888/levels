import { createDeviceResizer } from './util_deviceResizer'
import { KeyBoard } from './util_keyBoard'
import { createEmitter } from './util_emitter'
import { createFrameUpdater } from './util_frameUpater'

import { ASSETS_TO_LOAD } from './constants_elements'

import { loadAssets } from './utils_loadAssets'
import { prepareMeshesFromAssets } from './helper_prepareMeshesFromAssets'

import { createStudio } from './createStudio'
import { createPlayer } from './createPlayer'


import { setItemToFloorsCollision } from './component_collisionFloor'
import { setItemToWallCollision } from './component_collisionWalls'
import { addItemToNearChecker } from './component_checkNearItem'
import { showStartButton } from './systemHtml_intro'
import { createInfo } from './systemHtml_info'
import { createLevel } from './system_level'
import { createSystemBots } from './system_bots'



createDeviceResizer()



const init = assets => {
    const emitter = createEmitter()
    createFrameUpdater(emitter)

    const studio = createStudio(emitter, assets)

    /** player */
    new KeyBoard(emitter)
    const player = createPlayer(emitter)
    studio.setCamera(player.getCamera())
    studio.addToScene(player.getObj())

    /** bots */
    const systemBots = createSystemBots(assets.bot, emitter)
    studio.addToScene(systemBots.groupBots)

    /** level */
    const { arrMeshes, levelGroup, rooms } = prepareMeshesFromAssets(assets)
    const { arrRooms, group } = createLevel(emitter, rooms, player.getObj().position)
    studio.addToScene(group)


    /** UI */
    createInfo(emitter)
    showStartButton(emitter)
}



window.addEventListener('load', () => loadAssets(ASSETS_TO_LOAD).then(init))

