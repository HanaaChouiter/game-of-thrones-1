import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from './components/Characters';
import './App.css';
import ListFavoris from './components/ListFavoris';
import Button from './components/Button';
import Link from './components/Link';
import Continents from './components/Continents'
import title from './title.png';

class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      favorites: [],
      actibeTab: "",
      activeOnglet: "",
    }

    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleLinkClick = this.handleLinkClick.bind(this)
    this.deleteCharacter = this.deleteCharacter.bind(this)
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
    // console.log("hello")
    this.setState({ activeTab: str })
  }

  handleLinkClick(name) {
    // console.log("link")
    this.setState({
      activeOnglet: name,
      activeTab: "char"
    })
  }

  deleteCharacter(index){
    console.log("supp")
    const cloneCharacter = this.state.favorites.filter((favorite,i) => i !== index)
    this.setState({ favorites: cloneCharacter})
  }

  render() {
    const { activeTab, favorites, characters, activeOnglet} = this.state
    // console.log(this.state)
    return (
      <div className="container">
        {/* <h1>Game of thrones</h1> */}
        <img className="title-image  mx-auto d-block" src={title} alt="go"/>

        <nav className="nav">
          <Link name="Personnages" className="nav-link active text-light" href="#" handleLinkClick={this.handleLinkClick} />
          <Link name="Continents" className="nav-link active text-light " href="#" handleLinkClick={this.handleLinkClick} />
        </nav>

        {activeOnglet === "Personnages" &&
          <div>
            <Button
              text="favoris"
              handleClick={this.handleButtonClick}
            />
            {activeTab === "favoris" ? 

            <div className="row">
              <ListFavoris 
              characters={characters} 
              favorites={favorites} 
              deleteCharacter={this.deleteCharacter} 
              />
            </div> :
            
            <div className="row">
              <Characters
              handleFavoriteClick={this.handleFavoriteClick}
              characters={characters}
              />
            </div>
            }

          </div>
        }

        {activeOnglet === "Continents" &&
          <div className="row">
            <Continents />
          </div>
        }

      </div>
    );
  }
}

export default App;