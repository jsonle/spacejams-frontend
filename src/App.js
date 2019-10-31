import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavbarContainer from './components/navbar/NavbarContainer'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavbarContainer />
        </div>
      </Router>
    )
  }
}

export default App;
