import { connect } from 'react-redux'




const mapStateToProps = state => ({
    userReplicies: state.app.userReplicies,
})




export const UserReplicies = connect(mapStateToProps)(function (props) {
    return (
        <div className="userReplicies">
            {props.userReplicies.map(item => (<button
                    key={Math.floor(Math.random()* 100000)}
                    onClick={() => console.log('saaa')}>
                    {item.q}
                </button>)
            )}
        </div>
    )
})