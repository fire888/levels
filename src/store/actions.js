
export const toggleDialog = dispatch => ({
    toggleDialog: is => {
        dispatch({
            type: 'TOGGLE_DIALOG',
            isDialog: is,
        })
    },

    toggleButtonDialog: is => {
        dispatch({
            type: 'TOGGLE_BUTTON_DIALOG',
            isButtonDialog: is,
        })
    }
})
