import { createDeviceResizer } from './helpers/util_deviceResizer'
import { KeyBoard } from './helpers/util_keyBoard'
import { emitter } from './helpers/util_emitter'
import { createFrameUpdater } from './helpers/util_frameUpater'
import { createActionByChangedQuadrant } from './store/actionByChangeQuadrant'

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


import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentsReact/App';
import { Provider } from 'react-redux'
import { store } from './store/createStore'


  
  
//function handleChange() {
//    console.log(store.getState())
//}
  
//const unsubscribe = store.subscribe(handleChange)





ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)





createDeviceResizer()


const init = assets => {
    createFrameUpdater(emitter)
    emitter.subscribe(FRAME_UPDATE)(() => TWEEN.update())

    const studio = createStudio(emitter, assets, store)

    /** player */
    new KeyBoard(emitter)
    const player = createPlayer(emitter)
    studio.setCamera(player.getCamera())
    studio.addToScene(player.getObj())

    /** prepare assets */
    const { allMeshes,  rooms, materials } = prepareMeshesFromAssets(assets)

    /** level */
    const { group } = createLevel(emitter, rooms, allMeshes)
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
