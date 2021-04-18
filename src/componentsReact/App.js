import { connect } from 'react-redux'
import { toggleDialog } from '../store/actions'



const mapStateToProps = state => ({
    isButtonDialog: state.app.isButtonDialog,
    isDialog: state.app.isDialog,
    botReplicies: state.app.botReplicies,
    userReplicies: state.app.userReplicies,
})




function App(props) {
    !pr.dispatch && (pr.dispatch = props.dispatch)



    return (
        <div className="App">
            <div className="dialog">
                {props.isDialog && props.isButtonDialog && (<div className="dialog-inner">a</div>)}
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

export const pr = { dispatch: null }

export default connect(mapStateToProps)(App);