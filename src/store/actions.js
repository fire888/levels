import { emitter } from '../helpers/util_emitter'


export const toggleDialog = dispatch => ({
    changeBot: data => {
        dispatch({
            type: 'CHANGE_BOT',
            phrase: data,
        })
    },


    clickPhrase: r => {
        dispatch({
            type: 'CLICK_PHRASE',
            phrase: r,
        })

        setTimeout(() => {
            dispatch({
                type: 'PHRASE_EVENT',
                phrase: r,
            })

            r.levelEvent && emitter.emit('changeLevelMode')(r.levelEvent)
        }, 1000)
    },





    toggleDialog: is => {
        dispatch({
            type: 'TOGGLE_DIALOG',
            isDialog: is,
        })
    },


    toggleButtonDialog: is => {
        dispatch({
            type: 'TOGGLE_BUTTON',
            isButtonDialog: is,
        })
    }
})
