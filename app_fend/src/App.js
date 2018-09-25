import React, { Component } from 'react';
import Dashboard from './modules/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1><img src="https://t1.rbxcdn.com/d5fc3deb64aa4ad738e877f3097e626d" alt="Italian Trulli"></img>Comidas y Bebidas</h1>
          <p>Aplicacion para pedir comidass</p>

        </div>
        <div>

        </div>
        <Dashboard />

      </div>

    );
  }
}

export default App;
