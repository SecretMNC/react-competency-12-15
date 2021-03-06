import React, { Component } from 'react';
import './main.css';
import router from './router';
import Header from './components/dumb/header';
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {router}
      </div>
    );
  }
}

export default withRouter(App);
