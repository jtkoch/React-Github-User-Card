import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';

class App extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    axios 
      .get('https://api.github.com/users/Jensen-Koch')
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          user: res.data
        })
      })
      .catch(err => console.log('ERROR', err))
  }

  


render() {
    return (
      <div className="App">
        <h1>Github-User-Card</h1>
      </div>
    );
  }
}

export default App;