import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineFavorite } from 'react-icons/md';

class Characters extends Component {
    render() {
        // const { fullName, title, imageUrl } = this.props.character
        const { handleFavoriteClick, characters } = this.props
        return (
            <>
                {characters.map(character => (
                    <div className="col-2 my-3" >
                        <div className=" my-1 h-100 box"  key={character.id} >
                            <img className="image mb-3" src={character.imageUrl} alt="" />
                            <h4 className="text-center">{character.fullName}</h4>
                            <p className="text-center title">{character.title}</p>
                            <div className="d-flex justify-content-center">
                                {/* <button 
                                className="btn btn-outline-warning  my-2 ms-2" 
                                onClick={() => handleFavoriteClick(character)}
                                 >Favoris
                                </button> */}
                                
                                <MdOutlineFavorite  color="yellow" size="25px" onClick={() => handleFavoriteClick(character)} />
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    }
}

export default Characters;