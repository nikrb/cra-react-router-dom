import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

class Home extends React.Component {
  state = {
    gotoAbout: false,
    list: null
  };
  aboutClick = (e) => {
    this.setState( { gotoAbout: true, list: { created: new Date(), selectedFoods: []}})
  };
  render = () => {
    if( this.state.gotoAbout){
      return (
        <Redirect to={{
          pathname:"/about",
          state: { list: this.state.list}
        }} />
      );
    }
    return (
      <div>
        <h2>Home</h2>
        <button type="button" onClick={this.aboutClick} >Test</button>
      </div>
    );
  };
}

class About extends React.Component{
  render = () => {
    console.log( this.props.location.state);
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  };
}

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
);

export default App;
