import { createDeviceResizer } from './helpers/util_deviceResizer'
import { KeyBoard } from './helpers/util_keyBoard'
import { emitter } from './helpers/util_emitter'
import { createFrameUpdater } from './helpers/util_frameUpater'
import { createActionByChangedQuadrant } from './helpers/createActionByChangedQuadrant'

import { ASSETS_TO_LOAD } from './constants/constants_elements'

import { loadAssets } from './helpers/utils_loadAssets'
import { prepareMeshesFromAssets } from './helpers/helper_prepareMeshesFromAssets'

import { createStudio } from './entities/createStudio'
import { createPlayer } from './entities/createPlayer'


import { showStartButton } from './systems/systemHtml_intro'
import { createInfo } from './systems/systemHtml_info'
import { createLevel } from './systems/system_level'
import { createSystemBots } from './systems/system_bots'

import * as TWEEN from '@tweenjs/tween.js'
import { FRAME_UPDATE } from './constants/constants_elements'



createDeviceResizer()


const init = assets => {
    createFrameUpdater(emitter)
    emitter.subscribe(FRAME_UPDATE)(() => TWEEN.update())

    const studio = createStudio(emitter, assets)

    /** player */
    new KeyBoard(emitter)
    const player = createPlayer(emitter)
    studio.setCamera(player.getCamera())
    studio.addToScene(player.getObj())

    /** prepare assets */
    const { rooms, materials } = prepareMeshesFromAssets(assets)

    /** level */
    const { group } = createLevel(emitter, rooms, player.getObj().position)
    studio.addToScene(group)

    /** bots */
    const systemBots = createSystemBots(assets, materials, emitter)
    studio.addToScene(systemBots.groupBots)

    createActionByChangedQuadrant()
    
    setTimeout(() => player.start(), 500)


    /** UI */
    createInfo(emitter)
    showStartButton(emitter)
}



window.addEventListener('load', () => loadAssets(ASSETS_TO_LOAD).then(init))
