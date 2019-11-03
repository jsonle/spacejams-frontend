import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import NavbarContainer from './components/navbar/NavbarContainer';
import LoginPage from './components/login/LoginPage';
import CallBack from './components/login/CallBack';
import HomePageContainer from './components/homepage/HomePageContainer';


class App extends React.Component {

  state = {
    currentUser: {}
  }

  handleCode = () => {

  }

  handleCallBack = ({location}) => {
    return <CallBack location={location} handleCode={this.handleCode} />  
  }

  render() {
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
