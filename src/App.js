import React, { Component } from "react";
import HousesList from './components/HousesList'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div>
        <HousesList />
      </div>
    )
  }
}

export default App;
