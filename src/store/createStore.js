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
        a: 'Это вход в энтропийный гиппер-лабиринт.',
        event: 'close',
        levelEvent: null,
    },]
}



const bot02 = {
    phrases: [
        {
            q: 'Что ты сдесь делаешь ?',
            a: 'Собираю энергию ночи.',
            event: 'nextReply',
            levelEvent: null,
        },
        {
            q: 'В какую сторону мне идти ?',
            a: 'Здесь нет сторон. Здесь важна только длинна пути.',
            event: 'close',
            //levelEvent: null,
            levelEvent: null,
        },
    ]
}



const bot02_2 = {
    phrases: [{
        q: 'В какую сторону мне идти?',
        a: 'Ты уже спрашивал.',
        event: 'nextReply',
        levelEvent: null,
    },{
        q: 'Как долго идти?',
        a: 'Твой путь еще не пройден.',
        event: 'close',
        levelEvent: 'addStairs',
    },]
}




const bot03 = {
    phrases: [
        {
            q: 'Что ты сдесь делаешь ?',
            a: 'Собираю энергию дня.',
            event: 'close',
            levelEvent: 'addWell',
        },
    ]
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

    ui: {
        isShowButtFullScreen: true,
        isShowInfo: false,
        isShowFinalMessage: false,
        botAnswers: [],
        userReplicies: [],
        history: [],
        isDialog: false,
        isButtonDialog: false,
    },

    botIndex: -1,
    phraseIndex: 0,
    phrasesData: [bot01, bot02, bot02_2, bot03, null],
    isCanChangeBotIndex: true,
    isCanChangeBotCounter: 0,
}



const app = function(state = appData, action) {
    if (action.type === 'CLICK_FULL_SCREEN') {
        return ({
            ...state,
            ui: {
                ...state.ui,
                isShowButtFullScreen: false,
            }
        })
    }


    if (action.type === 'EXIT_FULL_SCREEN') {
        return ({
            ...state,
            ui: {
                ...state.ui,
                isShowButtFullScreen: true,
            }
        })
    }


    if (action.type === 'INFO_TOGGLE') {
        return ({
            ...state,
            ui: {
                ...state.ui,
                isShowFinalMessage: false,
                isShowInfo: action.mode,
            }
        })
    }


    if (action.type === 'TOGGLE_FINAL_MESSAGE') {
        return ({
            ...state,
            ui: {
                ...state.ui,
                isShowFinalMessage: action.mode,
                isShowInfo: false,
            }
        })
    }





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
        console.log()




        let isCanChangeBotCounter = state.isCanChangeBotCounter + 1;
        let isCanChangeBotIndex = state.isCanChangeBotIndex
        if (isCanChangeBotCounter > 2) {
            isCanChangeBotIndex = true
            isCanChangeBotCounter = 0
        }

        return ({
            ...state,
            playerQuadrant: {
                ...action,
            },
            isCanChangeBotIndex,
            isCanChangeBotCounter,
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
            ui: {
                ...state.ui,
                botAnswers: [
                    ...state.ui.botAnswers,
                    action.phrase,
                ],
                userReplicies: [],
            },
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
                ui: {
                    ...state.ui,
                    userReplicies,
                }
            })

        }

        if (event === 'close') {
            return ({
                ...state,
                ui: {
                    ...state.ui,
                    userReplicies: [],
                    isButtonDialog: true,
                }
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
        //TODO: UNCOMMENT
        if (!state.isCanChangeBotIndex) {
            return ({
                ...state,
                ui: {
                    ...state.ui,
                    isDialog: action.isDialog,
                    isButtonDialog: true,
                },

            })
        }
        const botIndex = state.isCanChangeBotIndex ? state.botIndex + 1 : state.botIndex
        const isButtonDialog = false


        // TODO: REMOVE
        //const botIndex = action.isDialog ? state.botIndex + 1 : state.botIndex
        //const isButtonDialog = !action.isDialog
        ////////////////


        const userReplicies = state.phrasesData[botIndex] ? [state.phrasesData[botIndex].phrases[state.phraseIndex]] : []

        return ({
            ...state,
            botIndex,
            ui: {
                ...state.ui,
                userReplicies,
                botAnswers: [],
                isDialog: action.isDialog,
                isButtonDialog,
            },
            isCanChangeBotIndex: false,
        })
    }

    if (action.type === 'TOGGLE_BUTTON') {

        return ({
            ...state,
            ui: {
                ...state.ui,
                isDialog: false,
                isButtonDialog: action.isButtonDialog,
            },
        })
    }


    return state
}



const rootReducer = combineReducers({ app })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

