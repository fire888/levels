import { createStore , applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'



const appData = {
    botReplicies: ['AAA', 'BBBB', 'CCC'],
    userReplicies: ['mmmm...', 'yyy...', 'aaa...'],
    isDialog: false,
    isButtonDialog: false
}




const app = function(state = appData, action) {
    if (action.type === 'TOGGLE_DIALOG') {
        return ({
            ...state,
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

