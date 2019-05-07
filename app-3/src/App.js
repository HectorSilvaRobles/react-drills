import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()

    this.state = {
      filterString: '',
      data: [ 'Yeezy', 'Jordans', 'Nike', 'Lebron', 'Air Max 270' ]
    };
  }

  handleChange(filter){
    this.setState({filterString: filter})
  }

  render() {
    let dataToDisplay = this.state.data
      .filter((element, index) => {
        return element.includes(this.state.filterString)
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>
      })

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type ='text' />
        {dataToDisplay}
      </div>
    );
  }
}

export default App;
