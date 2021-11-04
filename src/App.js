import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from './components/Characters';


class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      favorites: []
    }
  }

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(result => result.json())
      .then(result => {
        this.setState({ characters: result })
        // console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleFavoriteClick(character) {
    console.log("character", character)
  }


  render() {
    // console.log(this.state)
    return (
      <div className="container">
        <h1>Game of thrones</h1>
        <div className="row ">
         {this.state.characters.map(character => (
          <Characters
           handleFavoriteClick={this.handleFavoriteClick} 
           character={character} 
           />
          ))}
        </div>
      </div>
      );
  }
}

export default App;