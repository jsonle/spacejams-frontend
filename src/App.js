import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import NavbarContainer from './components/navbar/NavbarContainer';
import CallBack from './components/login/CallBack';
import Auth from './adapters/Auth';
import HomePageContainer from './components/homepage/HomePageContainer';
import BrowseContainer from './components/browse/BrowseContainer';
import RoomContainer from './components/room/RoomContainer';


class App extends React.Component {

  constructor() {
    super()
    const user = JSON.parse(localStorage.getItem("user"));
    this.state = {
      currentUser: user ? user : null,
      currentRoom: null
    }
  }

  componentDidMount() {
    // Checks whether user has been updated, and if so then updates currentUser
    const updatedUser = JSON.parse(localStorage.getItem("user"));
    if (this.state.currentUser && this.state.currentUser !== updatedUser) {
      this.setState({
        currentUser: updatedUser
      })
    }
  }

  handleCode = (code) => {
    Auth.login(code)
    .then(user=> {
      localStorage.setItem('user', JSON.stringify(user));
      this.setState({
        currentUser: user
      }, this.props.history.push('/'))
    })
  }

  onEnterRoom = (playlistId, roomId) => {

    fetch(`http://localhost:3000/rooms/${roomId}`)
    .then(resp => resp.json())
    .then(room => {
        this.setState({
            currentRoom: room
        }, this.props.history.push(`/room/${playlistId}/${roomId}`))
    })
  }


  handleCallBack = ({location}) => {
    return <CallBack location={location} handleCode={this.handleCode} />  
  }


  render() {
    return (
        <div className="App">
          <NavbarContainer />
          <Switch>
            <Route exact path="/" render={(routeProps) => <HomePageContainer {...routeProps} currentUser={this.state.currentUser}/>} />
            <Route path="/callback" component={this.handleCallBack} />
            <Route path="/browse"  render={(routeProps) => <BrowseContainer {...routeProps} currentUser={this.state.currentUser} onEnterRoom={this.onEnterRoom}/>} />
            <Route path='/room/:playlistId/:roomId'render={(routeProps) => <RoomContainer {...routeProps} currentUser={this.state.currentUser} currentRoom={this.state.currentRoom}/>}/>
          </Switch>
        </div>
    )
  }
}

export default withRouter(App);
