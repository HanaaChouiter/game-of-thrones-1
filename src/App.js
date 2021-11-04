import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from './components/Characters';
import './App.css';
import ListFavoris from './components/ListFavoris';
import Button from './components/Button';


class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      favorites: [],
      actibeTab: ""
    }

    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
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
    // console.log("character", character)
    const newFavorite = [...this.state.favorites, character]
    this.setState({ favorites: newFavorite })
    console.log(this.state.favorites)
  }

  handleButtonClick(str) {
    console.log("hello")
    this.setState({ activeTab: str })
  }


  render() {
    const { activeTab, favorites, characters } = this.state
    // console.log(this.state)
    return (
      <div className="container">
        <h1>Game of thrones</h1>
        <Button
          text="favoris"
          handleClick={this.handleButtonClick}
        />
        {/* {activeTab === "favoris" && <ListFavoris favorites={favorites} />} */}
        {activeTab === "favoris" ? <div className="row "><ListFavoris favorites={favorites} /> </div> : 
        <div className="row ">
          <Characters
            handleFavoriteClick={this.handleFavoriteClick}
            characters={characters}
            />
        </div>
        } 
        </div>
    );
  }
}

export default App;