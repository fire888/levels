import { createStore , applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'

import { REPLICIES } from '../constants/constants_replicies'



const appData = {
    botAnswers: [],
    userReplicies: [],
    isDialog: false,
    isButtonDialog: false
}




const app = function(state = appData, action) {

    if (action.type === 'TOGGLE_DIALOG') {

        const botAnswers = [...REPLICIES]
        const userReplicies = [...REPLICIES]

        return ({
            ...state,
            botAnswers,
            userReplicies,
            isDialog: action.isDialog,
        })
    }

    if (action.type === 'TOGGLE_BUTTON_DIALOG') {

        //const isDialog = action.isButtonDialog === false ? false :

        return ({
            ...state,
            isDialog: false,
            isButtonDialog: action.isButtonDialog,
        })
    }


    return state
}



const rootReducer = combineReducers({ app })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

