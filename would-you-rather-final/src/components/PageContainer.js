import React, {Component} from 'react'
import Navigation from './navigation.js'
import Dashboard from './dashboard.js'
import { connect } from 'react-redux'
import NewQuestion from './NewQuestion.js';



class PageContainer extends Component{
    render(){
        return(
            <div>
                {/* <Navigation/> */}
                {/* <Dashboard ids={this.props.questionIds}/> */}
                <NewQuestion/>
            </div>
        )
    }
}

function mapStateToProps({ questions}) {

    return {
        questionIds: Object.keys(questions),
    }
}

export default connect(mapStateToProps)(PageContainer)