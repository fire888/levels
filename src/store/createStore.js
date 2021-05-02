import { createStore , applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'
import { FLOORS_CONF } from '../constants/constants_elements'


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
        event: 'nextReply',
        levelEvent: null,
    },{
        q: 'Я уже долго иду !',
        a: 'Твой путь еще не пройден.',
        event: 'close',
        levelEvent: null,
    },]
}

const bot02_2 = {
    phrases: [{
        q: 'Это ты или не ты?',
        a: 'Я это я.',
        event: 'nextReply',
        levelEvent: null,
    },{
        q: 'Я уже долго иду !',
        a: 'Твой путь еще не пройден.',
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
    sceneEnvironment: {
        color: FLOORS_CONF['-1']['outer'].color,
        fogNear: FLOORS_CONF['-1']['outer'].fogNear,
        fogFar: FLOORS_CONF['-1']['outer'].fogFar,
        backgroundImgKey: 'skyBox',
    },

    playerQuadrant: {
        oldQuadrant: [0, 0, 0],
        newQuadrant: [0, 0, 0],
        counter: null,
    },

    level: {
        isStartCorridorShow: true,
    },

    isCanChangeBotIndex: true,
    isDialogAnswered: false,
    botIndex: -1,
    phraseIndex: 0,
    phrasesData: [bot01, bot02, bot02_2, bot03, null],
    botAnswers: [],
    userReplicies: [],
    history: [],
    isDialog: false,
    isButtonDialog: false
}





let isCanChangeBot = 0


const app = function(state = appData, action) {
    if (action.type === 'CHANGE_ENVIRONMENT') {
        const { newQuadrant, environmentMode } = action

        if (!FLOORS_CONF[newQuadrant[1]]) return state;

        const { fogNear, fogFar, color } = FLOORS_CONF[newQuadrant[1]][environmentMode]

        return ({
            ...state,
            sceneEnvironment: {
                fogNear,
                fogFar,
                color,
            }
        })
    }


    if (action.type === 'CHANGE_QUADRANT') {
        ++isCanChangeBot;
        let isCanChangeBotIndex = state.isCanChangeBotIndex
        if (isCanChangeBot > 2) {
            isCanChangeBotIndex = true
            isCanChangeBot = 0
        }

        return ({
            ...state,
            playerQuadrant: {
                ...action,
            },
            isCanChangeBotIndex,
        })
    }



    if (action.type === 'DESTROY_START_CORRIDOR') {
        return ({
            ...state,
            level: {
                ...state.level,
                isStartCorridorShow: false,
            }
        })
    }



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

