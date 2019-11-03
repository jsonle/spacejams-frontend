import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import NavbarContainer from './components/navbar/NavbarContainer';
import LoginPage from './components/login/LoginPage';
import CallBack from './components/login/CallBack';
import Auth from './components/login/Auth';
import HomePageContainer from './components/homepage/HomePageContainer';


class App extends React.Component {

  state = {
    currentUser: {}
  }

  handleCode = (code) => {
    Auth.login(code)
    .then(resp=> {
      const currentUser = resp
      this.setState({currentUser}, this.history.push('/'))
    })
  }

  handleCallBack = ({location}) => {
    return <CallBack location={location} handleCode={this.handleCode} />  
  }

  render() {
    console.log(this.state)
    return (
      <Router>
        <div className="App">
          <NavbarContainer />
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route exact path="/" render={(routeProps) => <HomePageContainer {...routeProps} currentUser={this.currentUser}/>} />
            <Route exact path="/callback" component={this.handleCallBack} />  
          </Switch>
        
        </div>
      </Router>
    )
  }
}

export default withRouter(App);
