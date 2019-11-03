import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import NavbarContainer from './components/navbar/NavbarContainer'
import LoginPage from './components/LoginPage'
import HomePageContainer from './components/homepage/HomePageContainer'
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends React.Component {

  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      currentUser: null
    }
  }

  componentDidMount() {
    if ( this.state.loggedIn && !this.state.currentUser) {
      spotifyApi.getMe()
      .then( response => {
        this.setState({
          currentUser: response
        })
      })
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }


  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  render() {
    console.log(this.state.currentUser);
    return (
      <Router>
        <div className="App">
          <NavbarContainer />
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route exact path="/home" component={HomePageContainer} />  
          </Switch>
        
        </div>
      </Router>
    )
  }
}

export default withRouter(App);
