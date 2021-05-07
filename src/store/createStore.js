import { createStore , applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { FLOORS_CONF } from '../constants/constants_elements'





const bot01 = [{
    phrases: [
        {
            q: 'Привет !',
            a: 'День добрый, кремниевая форма жизни.',
            event: 'nextReply',
            levelEvent: null,
        }, {
            q: 'Что это за место?',
            a: 'Это вход в энтропийный гиппер-лабиринт.',
            event: 'nextReply',
            levelEvent: null,
        }, {
            q: 'Что будет, если я войду в него?',
            a: 'Лабиринт ждет.',
            event: 'close',
            levelEvent: null,
        },
    ]
}, {
    phrases: [
        {
            q: 'Куда ведут эти корридоры ?',
            a: 'Они приведут тебя к финалу.',
            event: 'nextReply',
            levelEvent: null,
        }, {
            q: 'Я пошел дальше.',
            a: 'Мы еще увидимся.',
            event: 'close',
            levelEvent: null,
        },
    ]
}, {



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
},



    {
    phrases: [
        {
        q: 'Я уже долго иду.',
        a: 'Ты прошел достаточно для этого уровня.',
        event: 'nextReply',
        levelEvent: null,
    },{
        q: 'Что это значит?',
        a: 'Тебе открыт путь на одну ступень выше.',
        event: 'close',
        levelEvent: 'addStairs',
    },
    ]
},


    /////////////////////////////////// 11111111111111111

    {
    phrases: [
        {
            q: 'Я ищу финал.',
            a: 'Я помню о твоем пути.',
            event: 'nextReply',
            levelEvent: 'addWell',
        }, {
            q: 'Вы все так похожи.',
            a: 'Мы еще встретимся.',
            event: 'close',
            levelEvent: null,
        },
    ]
},


    {
        phrases: [
            {
                q: 'Это снова ты?',
                a: 'Да мы все едины.',
                event: 'nextReply',
                levelEvent: 'addWell',
            }, {
                q: 'Тут все корридоры повторяются.',
                a: 'Суть всего в едином.',
                event: 'close',
                levelEvent: null,
            },
        ]
    },


    {
        phrases: [
            {
                q: 'Как долго еще идти.',
                a: 'Тебе будет знак, когда ты будешь готов.',
                event: 'nextReply',
                levelEvent: 'addWell',
            }, {
                q: 'Как я узнаю этот знак.',
                a: 'Я подам его.',
                event: 'close',
                levelEvent: null,
            },
        ]
    },


    {
        phrases: [
            {
                q: 'Это одинаковый сегмент корридора с тобой.',
                a: 'Ты готов к новому уровню.',
                event: 'close',
                levelEvent: 'addStairs',
            },
        ]
    },

    /////////////////////////////////// 222222222222222222


    {
        phrases: [
            {
                q: 'Привет снова. Как выбраться. Уже надоело.',
                a: 'Ты не постиг дзен.',
                event: 'nextReply',
                levelEvent: null,
            },
            {
                q: 'Ты то как выходишь на поверхность?',
                a: 'У меня свой путь.',
                event: 'close',
                levelEvent: null,
            },
        ]
    },



    {
        phrases: [
            {
                q: 'Ты все на своем пути?',
                a: 'Как и ты.',
                event: 'nextReply',
                levelEvent: null,
            },
            {
                q: 'Как долго ты на нем.',
                a: 'Эти стены нас слышат.',
                event: 'close',
                levelEvent: null,
            },
        ]
    },


    {
        phrases: [
            {
                q: 'Мне кажется ты идешь в нагрузку к этому сегменту корридора.',
                a: 'Тебе открыт следующий уровень.',
                event: 'close',
                levelEvent: 'addStairs',
            },
        ]
    },






    /////////////////////////////////////////////////// 3333333333333


    {
        phrases: [
            {
                q: 'Ничего не меняется.',
                a: 'Меняется количество пройденных шагов.',
                event: 'nextReply',
                levelEvent: null,
            },
            {
                q: 'Это место считает шаги?',
                a: 'Это место ждет.',
                event: 'close',
                levelEvent: null,
            },
        ]
    },



    {
        phrases: [
            {
                q: 'Как давно ты здесь.',
                a: 'Время не имеет значения, значение имеет лишь путь.',
                event: 'nextReply',
                levelEvent: null,
            },
            {
                q: 'Но ты же не идешь.',
                a: 'Зато ты каждый раз проходишь мимо.',
                event: 'close',
                levelEvent: null,
            },
        ]
    },

    {
        phrases: [
            {
                q: 'Сделай новый уровень.',
                a: 'Ты готов - новый уровень ждет тебя.',
                event: 'close',
                levelEvent: 'addStairs',
            },
        ]
    },


    //////////////////////////////// 44444444

    {
        phrases: [
            {
                q: 'Ты и есть это место. Ты управляешь сегментами.',
                a: 'Ты почти дошел до края.',
                event: 'nextReply',
                levelEvent: null,
            },
            {
                q: 'Зачем тебе это?',
                a: 'Это способ свернуть пространство. Больше движения. Больше сегментов.',
                event: 'close',
                levelEvent: null,
            },
        ]
    },


    {
        phrases: [
            {
                q: 'Как много путников попадало сюда.',
                a: 'Много и они до сих пор здесь.',
                event: 'nextReply',
                levelEvent: null,
            },
            {
                q: 'Почему я их не встретил?',
                a: 'У каждого своя система сегментов и свой наставник.',
                event: 'close',
                levelEvent: null,
            },
        ]
    },


    {
        phrases: [
            {
                q: 'Ты выпустишь меня?',
                a: 'Все стороны света открыты тебе.',
                event: 'nextReply',
                levelEvent: null,
            },
            {
                q: 'Я хочу встретить других.',
                a: 'Тебе открыт новый уровень.',
                event: 'close',
                levelEvent: null,
            },
        ]
    },

    //////////////////////////////////////////////// 5555555555


    {
        phrases: [
            {
                q: 'Все повторяется.',
                a: 'Все повторяется с небольшой разницей.',
                event: 'nextReply',
                levelEvent: null,
            },
            {
                q: 'Как много этажей еще ждет меня?',
                a: 'Все зависит от тебя.',
                event: 'close',
                levelEvent: null,
            },
        ]
    },



    {
        phrases: [
            {
                q: 'Все мой путь окончен.',
                a: 'Ты отказываешься идти?',
                event: 'nextReply',
                levelEvent: null,
            },
            {
                q: 'Да ты безумен.',
                a: 'Я освобождаю тебя.',
                event: 'close',
                levelEvent: 'addWell',
            },
        ]
    },


]












// {
//     phrases: [
//         {
//             q: 'Это одинаковый сегмент корридора с тобой.',
//             a: 'Ты готов к новому уровню.',
//             event: 'close',
//             levelEvent: 'addWell',
//         },
//     ]
// },








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
    phrasesData: bot01,
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
                phraseIndex: state.phraseIndex + 1,
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
                },
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
        //////////////////////////////////////////// TODO: UNCOMMENT
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
        const phraseIndex = state.isCanChangeBotIndex ? 0 : state.phraseIndex
        const botIndex = state.isCanChangeBotIndex ? state.botIndex + 1 : state.botIndex
        const isButtonDialog = false
        /////////////////////////////////////////////////////


        ///////////////////////////////////////////// TODO: REMOVE
        // let botIndex = state.botIndex
        // let phraseIndex = state.phraseIndex
        // if (action.isDialog) {
        //     botIndex = state.botIndex + 1
        //     phraseIndex = 0
        // }
        // const isButtonDialog = !action.isDialog
        // /////////////////////////////////////////////////


        const userReplicies = state.phrasesData[botIndex] ? [state.phrasesData[botIndex].phrases[phraseIndex]] : []

        return ({
            ...state,

            ui: {
                ...state.ui,
                userReplicies,
                botAnswers: [],
                isDialog: action.isDialog,
                isButtonDialog,
            },

            isCanChangeBotIndex: false,
            botIndex,
            phraseIndex,
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

