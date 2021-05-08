import { UserReplicies } from './UserReplicies'
import { BotAnswers } from './BotAnswers'

import { connect } from 'react-redux'
import { toggleDialog, clickFullScreen, clickInfo, showMessages } from '../store/actions'
import { emitter } from '../helpers/util_emitter'
import { t } from '../helpers/util_translate'




const mapStateToProps = state => ({
    isButtonDialog: state.app.ui.isButtonDialog,
    isDialog: state.app.ui.isDialog,
    isShowClickFullScreen: state.app.ui.isShowButtFullScreen,
    isShowInfo: state.app.ui.isShowInfo,
    isShowFinalMessage: state.app.ui.isShowFinalMessage,
})




function App(props) {
    !pr.dispatch && (pr.dispatch = props.dispatch)



    return (
        <div className="ui">
            {props.isButtonDialog && (
                <button
                    className="butt-toggleDialog"
                    onClick={() => {toggleDialog(props.dispatch).toggleDialog(!props.isDialog)}}>
                    {props.isDialog ? t('close dialog') : t('open dialog') }
                </button>)}


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



            {!props.isDialog && props.isShowClickFullScreen && (
                <button
                    className="butt-fullscreen control"
                    onClick={() => {
                        emitter.emit('mouseDown')('butt-fullscreen')
                        clickFullScreen(props.dispatch).clickFullScreen()
                    }}>
                    &#10066;
                </button>)}



            {!props.isDialog && !props.isShowInfo && (
                <button
                    className="butt-info control"
                    onClick={() => clickInfo(props.dispatch).clickInfo(true)}>
                    i
                </button>)}




            {props.isDialog && (
                <div className="dialog">
                    <div className="dialog-inner">
                        <BotAnswers />
                        <UserReplicies />
                    </div>
                </div>)}



            {props.isShowFinalMessage && (
                <div className="info">
                    <div className="info-inner final-message">
                        {/*<button*/}
                            {/*className="control butt-infoClose"*/}
                            {/*onClick={() => showMessages(props.dispatch).toggleFinalMessage(false)}>*/}
                            {/*x*/}
                        {/*</button>*/}
                        <p>{t('The end')}</p>
                    </div>
                </div>)}



            {props.isShowInfo && (
                <div className="info">
                    <div className="info-inner">
                        <button
                            className="control butt-infoClose"
                            onClick={() => clickInfo(props.dispatch).clickInfo(false)}>
                            x
                        </button>
                        <p>
                            {`1 ${t('chapter')}: `}
                            <a href="http://js.otrisovano.ru/factory/" target="blank">{ t('link') }</a>
                        </p>
                        <p>
                            {`2 ${t('chapter')}: `}
                            <a href="http://js.otrisovano.ru/bridge/" target="blank">{ t('link') }</a>
                        </p>
                        <p><br /><br />
                            {t('Author: ')}
                            <a href="http://otrisovano.ru" target="blank">{ t('link') }</a>
                        </p>
                        <p>
                            {t('Github: ')}
                            <a href="https://github.com/fire888/levels/" target="blank">{ t('link') }</a>
                        </p>
                    </div>
                </div>)}
        </div>
    )
}



export const pr = { dispatch: null }

export default connect(mapStateToProps)(App);
