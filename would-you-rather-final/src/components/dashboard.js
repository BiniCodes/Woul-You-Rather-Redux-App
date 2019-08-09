import React, {Component} from 'react';
import { connect } from 'react-redux'
import Question from './Question' 


class Dashboard extends Component{
    render() {
        const {questions} = this.props
        return(
            <div>This is the Dashboard!
                <h3>Questions list</h3>
                <ul>
                    {this.props.ids.map((questionId) => (
                        <li key={questionId}>
                        {console.log(this.props)}
                            {((!(questions[questionId].optionOne.votes.includes(this.props.authedUser))) 
                            && (!(questions[questionId].optionTwo.votes.includes(this.props.authedUser))))
                            ? <Question id={questionId} />
                            : null}
                        </li> 
                    ))} 
                                  
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, authedUser} , {ids}) {
    return {
        questions:questions,
        ids,
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(Dashboard) 