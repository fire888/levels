import { createStore , applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'


const bot01 = {
    phrases: [{
        q: 'Привет !',
        a: 'День добрый, кремниевая форма жизни.',
        event: 'nextReply',
        levelEvent: null,
    }, {
        q: 'Что это за место ?',
        a: 'Это энтропийный гипперлабиринт.',
        event: 'close',
        levelEvent: null,
    },]
}

const bot02 = {
    phrases: [{
        q: 'Что ты сдесь делаешь !',
        a: 'Собираю энергию ночи.',
        event: 'close',
        levelEvent: 'addStairs',
    },]
}

const bot03 = {
    phrases: [{
        q: 'Что ты сдесь делаешь !',
        a: 'Собираю энергию дня.',
        event: 'close',
        levelEvent: 'addWell',
    },]
}





const appData = {
    isCanChangeBotIndex: true,
    isDialogAnswered: false,
    botIndex: -1,
    phraseIndex: 0,
    phrasesData: [bot01, bot02, bot03, null],
    botAnswers: [],
    userReplicies: [],
    history: [],
    isDialog: false,
    isButtonDialog: false
}




const app = function(state = appData, action) {
    if (action.type === 'CLICK_PHRASE') {
        return ({
            ...state,
            botAnswers: [
                ...state.botAnswers,
                action.phrase,
            ],
            userReplicies: [],
        })
    }




    if (action.type === 'PHRASE_EVENT') {
        const { event } = action.phrase

        if (event === 'nextReply') {
            const botPhrases = state.phrasesData[state.botIndex]
            const userReplicies = [botPhrases.phrases[state.phraseIndex + 1]]

            return ({
                ...state,
                phraseIndex: state.phraseIndex++,
                userReplicies,
            })

        }

        if (event === 'close') {
            return ({
                ...state,
                isDialogAnswered: true,
                userReplicies: [],
                isButtonDialog: true,
            })
        }
    }




    if (action.type === 'CHANGE_BOT') {
        return ({
            ...state,
            isCanChangeBotIndex: true,
        })
    }




    if (action.type === 'TOGGLE_DIALOG') {
        if (!state.isCanChangeBotIndex && state.isDialogAnswered) {
            return ({
                ...state,
                isDialog: action.isDialog,
                isButtonDialog: true,
            })
        }

        const botIndex = state.isCanChangeBotIndex ? state.botIndex + 1 : state.botIndex
        const userReplicies = [state.phrasesData[botIndex].phrases[state.phraseIndex]]

        return ({
            ...state,
            botIndex,
            userReplicies,
            botAnswers: [],
            isDialog: action.isDialog,
            isCanChangeBotIndex: false,
            isButtonDialog: false,
        })
    }

    if (action.type === 'TOGGLE_BUTTON') {

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

