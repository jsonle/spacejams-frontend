import React from 'react';
import './App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import NavbarContainer from './components/navbar/NavbarContainer';
import CallBack from './components/login/CallBack';
import Auth from './adapters/Auth';
import HomePageContainer from './components/homepage/HomePageContainer';


class App extends React.Component {

  state = {
    currentUser: null
  }

  handleCode = (code) => {
    Auth.login(code)
    .then(resp=> {
      this.setState({
        currentUser: resp
      }, this.props.history.push('/'))
    })
  }

  handleCallBack = ({location}) => {
    return <CallBack location={location} handleCode={this.handleCode} />  
  }

  render() {
    console.log(this.state.currentUser)
    return (
        <div className="App">
          <NavbarContainer />
          <Switch>
            <Route exact path="/" render={(routeProps) => <HomePageContainer {...routeProps} currentUser={this.state.currentUser}/>} />
            <Route exact path="/callback" component={this.handleCallBack} />
          </Switch>
        </div>
    )
  }
}

export default withRouter(App);
