import { UserReplicies } from './UserReplicies'
import { BotAnswers } from './BotAnswers'

import { connect } from 'react-redux'
import { toggleDialog } from '../store/actions'
import { emitter } from '../helpers/util_emitter'



const mapStateToProps = state => ({
    isButtonDialog: state.app.isButtonDialog,
    isDialog: state.app.isDialog,
})




function App(props) {
    !pr.dispatch && (pr.dispatch = props.dispatch)



    return (
        <div className="App">
            <div className="dialog">
                {props.isDialog && (<div className="dialog-inner">
                    <BotAnswers />
                    <UserReplicies />
                </div>)}
            </div>
            {props.isButtonDialog && (<button
                className="last-elem"
                onClick={() => {
                    toggleDialog(props.dispatch).toggleDialog(!props.isDialog)
                }}>
                { props.isDialog ? 'close dialog' : 'open dialog' }</button>)}
        </div>
    )
}

let isCanChangeBot = 0

emitter.subscribe('changeLevel')(({ direction, oldQuadrant, newQuadrant, counter }) => {
    ++isCanChangeBot;
    if (isCanChangeBot > 2) {
        toggleDialog(pr.dispatch).changeBot()
        isCanChangeBot = 0
    }
})

export const pr = { dispatch: null }

export default connect(mapStateToProps)(App);