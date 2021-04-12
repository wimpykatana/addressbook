import React from 'react';
import { Button } from 'reactstrap';
import Item from './component/Item'
import './App.css';


class App extends React.Component {

  render() {
    return (
      <div className="App" style={{display: 'flex', justifyContent: 'center'}}>
        <Item />
      </div>
    );
  }
}

export default App;
