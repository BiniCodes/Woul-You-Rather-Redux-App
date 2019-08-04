import React, {Component} from 'react';
import { connect } from 'react-redux'


class Dashboard extends Component{
    render() {
        return(
            <div>This is the Dashboard!
                <h3>Questions list</h3>
                <ul>
                    {this.props.questionIds.map((questionId) => (
                        <li key={questionId}>
                            <div>{questionId}</div>
                        </li>
                    ))

                    }                
                </ul>
            </div>
        )
    }
}

function mapStateToProps({questions}) {
    return {
        questionIds: Object.keys(questions)
    }
}

export default connect(mapStateToProps)(Dashboard) 