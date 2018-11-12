import React, { Component } from 'react';
import './App.css';
// import LightContainer from './containers/LightContainer';
import CounterContainer from './containers/CounterContainer';



class App extends Component {






  render() {
    return (
      <div className="App">
        {/* <LightContainer/> */}
        <CounterContainer/>
      </div>
    );
  }
}

export default App;
