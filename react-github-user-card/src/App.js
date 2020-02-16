import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerList from './components/FollowerList';



class App extends Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount() {
    axios 
      .get('https://api.github.com/users/Jtkoch')
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          user: res.data
        })
      })
      .catch(err => console.log('ERROR', err))

    axios
      .get('https://api.github.com/users/Jtkoch/followers') 
      .then(res2 => {
        console.log(res2.data);
        this.setState({
          ...this.state,
          followers: res2.data
        })
      }) 
      .catch(err2 => console.log('ERROR', err2))
  }

render() {
    return (
      <div className="App">
        <div className="top">
          <nav className="title">Github User Card</nav>
          <UserCard user={this.state.user} followers={this.state.followers} />
        </div>
        <h1>Followers</h1>
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;