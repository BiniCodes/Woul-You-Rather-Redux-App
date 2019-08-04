import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navigation extends Component {
    render() {
        console.log(this.props)
        return(
            <div>THIS WILL BE THE NAV {this.props.questions}</div>
        )
    }
}

function mapStateToProps(state) {
    //const { questions } = state.questions
    return {
        questions: state.questions.id
    }
}

//function mapStateToProps({ questions }) {
  //  const { question } = questions
    //return {
      //  question
    //}
//}

export default connect(mapStateToProps)(Navigation)