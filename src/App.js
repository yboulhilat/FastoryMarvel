import React from 'react';
import './styles/App.css';
import { Container } from 'reactstrap';
import Header from './components/header';
import Actors from './components/Actors';
import ActorDetail from './components/ActorDetail'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
class App extends React.Component {
 
  render() {
    return (
    <Container className='App' fluid>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" render={props => <Actors {...props} />} />
            <Route path="/actor-detail" render={props => <ActorDetail {...props} />} />

          </Switch>
        </Router>
    </Container>
    )
  }
}



export default App;