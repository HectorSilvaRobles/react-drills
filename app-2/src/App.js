import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      lyrics: ['Everywhere', 'Its', 'War']
    };
  }
  render() {
    let lyricsToDisplay = this.state.lyrics.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return <div className='App'>{lyricsToDisplay}</div>
  }
}

export default App;
