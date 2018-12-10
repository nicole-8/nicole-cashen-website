import React, { Component } from 'react';
import Menu from './Menu'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Content />
      </div>
    );
  }
}

export default App;
