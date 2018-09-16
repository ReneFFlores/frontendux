import React, { Component } from 'react';
import Dashboard from './modules/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Comidas y Bebidas</h1>
          <p>Aplicacion para pedir comidass</p>
        </div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
