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
    //const { questions } = state.questions
    return {
        authedUser: authedUser   
    }
}

//function mapStateToProps({ questions }) {
  //  const { question } = questions
    //return {
      //  question
    //}
//}

export default connect(mapStateToProps)(Navigation)