import { connect } from 'react-redux'




const mapStateToProps = state => ({
    botAnswers: state.app.ui.botAnswers,
})




export const BotAnswers = connect(mapStateToProps)(function (props) {
    return (
        <div className="botAnswers">
            {props.botAnswers.map(item => (<div key={Math.floor(Math.random() * 100000)}>
                    <div className="q">{item.q}</div>
                    <div className="a">{item.a}</div>
                </div>)
            )}
        </div>
    )
})