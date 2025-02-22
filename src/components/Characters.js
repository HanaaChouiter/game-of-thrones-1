import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Characters extends Component {
    render() {
        // const { fullName, title, imageUrl } = this.props.character
        const { handleFavoriteClick, characters } = this.props
        return (
            <>
                {characters.map(character => (
                    <div className="col-4" >
                        <div className="border border-2  my-3" >
                            <img className="image mx-auto d-block" src={character.imageUrl} alt="" />
                            <h2 className="text-center">{character.fullName}</h2>
                            <p className="text-center">{character.title}</p>
                            <button className="btn btn-primary my-2 ms-2" onClick={() => handleFavoriteClick(character)} >Ajouter aux favoris</button>
                        </div>
                    </div>
                ))}
            </>
        );
    }
}

export default Characters;