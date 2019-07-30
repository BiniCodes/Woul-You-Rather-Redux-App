import React, {Component} from 'react';
import Navigation from './components/navigation.js'
import { connect } from 'react-redux'
import './App.css';
import { handleInitialData } from './actions/shared';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return (
        <Navigation/>
      );
  }
} 

function mapStateToProps({ authedUser }){
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(App)
