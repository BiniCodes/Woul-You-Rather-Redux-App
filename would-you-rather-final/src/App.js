import React, {Component} from 'react';
//import Navigation from './components/navigation.js'
//import Dashboard from './components/dashboard.js'
import { connect } from 'react-redux'
import './App.css';
import { handleInitialData } from './actions/shared';
import PageContainer from './components/PageContainer.js'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <div>
        <PageContainer/>  
      </div>
      );
  }
} 

function mapStateToProps({ authedUser }){
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(App)
