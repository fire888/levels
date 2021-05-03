import { UserReplicies } from './UserReplicies'
import { BotAnswers } from './BotAnswers'

import { connect } from 'react-redux'
import { toggleDialog } from '../store/actions'




const mapStateToProps = state => ({
    isButtonDialog: state.app.isButtonDialog,
    isDialog: state.app.isDialog,
})




function App(props) {
    !pr.dispatch && (pr.dispatch = props.dispatch)



    return (
        <div className="App">
           <div className="ui">     



                <div className="ui-top">
                    <button id="butt-fullscreen" className="control" style={{"display": "none"}}>&#10066;</button>  
                    <button id="butt-info" className="control">i</button>     
                </div>


                <div className="ui-center">
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





                <div className="ui-bottom">
                    <div className='left-container'>
                        {!props.isDialog && (<button className="butt-left control">&#9668;</button>)}
                        {!props.isDialog && (<button className="butt-right control">&#9658;</button>)}
                    </div>
                    <div className="center-container">
                        <button id="dialog-button-toggle" style={{"display": "none"}}>диалог</button>
                    </div>
                    <div className='right-container'>
                        {!props.isDialog && (<button className="butt-front control">&#9650;</button>)}
                    </div> 
                </div> 
            </div>    
        </div>
    )
}

export const pr = { dispatch: null }

export default connect(mapStateToProps)(App);
