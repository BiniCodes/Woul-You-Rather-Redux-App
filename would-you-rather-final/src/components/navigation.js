import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navigation extends Component {
    render() {
        return(
            <div>THIS WILL BE THE NAV {this.props.authedUser}</div>
        )
    }
}

function mapStateToProps({authedUser}) {
    console.log(authedUser)

    return {
        authedUser: authedUser   
    }
}


export default connect(mapStateToProps)(Navigation)