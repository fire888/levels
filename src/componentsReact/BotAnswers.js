import { connect } from 'react-redux'




const mapStateToProps = state => ({
    botAnswers: state.app.botAnswers,
})




export const BotAnswers = connect(mapStateToProps)(function (props) {
    return (
        <div className="botAnswers">
            {props.botAnswers.map(item => (<div key={Math.floor(Math.random() * 100000)}>
                    <p>{item.q}</p>
                    <p>{item.a}</p>
                </div>)
            )}
        </div>
    )
})