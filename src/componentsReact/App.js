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
        <div className="ui">
            <button
                className="butt-fullscreen control"
                style={{"display": "none"}}>
                &#10066;
            </button>



            <button
                className="butt-info control">
                i
            </button>



            {!props.isDialog && (
                <button
                    className="butt-left control"
                    onMouseDown={() => emitter.emit('mouseDown')('butt-left')}
                    onTouchStart={() => emitter.emit('mouseDown')('butt-left')}
                    onMouseUp={() => emitter.emit('mouseUp')('butt-left')}
                    onTouchEnd={() => emitter.emit('mouseUp')('butt-left')}>
                    &#9668;
                </button>)}



            {!props.isDialog && (
                <button
                    className="butt-right control"
                    onMouseDown={() => emitter.emit('mouseDown')('butt-right')}
                    onTouchStart={() => emitter.emit('mouseDown')('butt-right')}
                    onMouseUp={() => emitter.emit('mouseUp')('butt-right')}
                    onTouchEnd={() => emitter.emit('mouseUp')('butt-right')}>
                    &#9658;
                </button>)}



            {!props.isDialog && (
                <button
                    className="butt-front control"
                    onMouseDown={() => emitter.emit('mouseDown')('butt-front')}
                    onTouchStart={() => emitter.emit('mouseDown')('butt-front')}
                    onMouseUp={() => emitter.emit('mouseUp')('butt-front')}
                    onTouchEnd={() => emitter.emit('mouseUp')('butt-front')}>
                    &#9650;
                </button>)}



            {props.isButtonDialog && (
                <button
                    className="butt-toggleDialog"
                    onClick={() => {toggleDialog(props.dispatch).toggleDialog(!props.isDialog)}}>
                    {props.isDialog ? 'close dialog' : 'open dialog' }
                </button>)}


            {props.isDialog && (
                <div className="dialog">
                    <div className="dialog-inner">
                        <BotAnswers />
                        <UserReplicies />
                    </div>
                </div>)}

        </div>
    )
}



export const pr = { dispatch: null }

export default connect(mapStateToProps)(App);
