import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import MovieList from './components/Netfix';
import Logo from './components/Logo';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div >
          <Logo />
        </div>
        <label className="Label">Mylist
          <MovieList btnName="Remove" listType="mylist"/>
        </label>
        
        <label className="Label">recommendations
          <MovieList
          btnName="Add" listType="recommendations"/>
        </label>
        <Footer/>
      </div>
    );
  }
}

export default App;