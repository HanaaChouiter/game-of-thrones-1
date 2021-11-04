import React, { Component } from 'react';

class ListFavoris extends Component {
    render() {
        const { favorites } = this.props
        return (
            <>
                {favorites.map(character => (
                    <div className="col-4" >
                        <div className="border border-2  my-3" key={character.id}>
                            <img className="image mx-auto d-block" src={character.imageUrl} alt="" />
                            <h2 className="text-center">{character.fullName}</h2>
                            <p className="text-center">{character.title}</p>
                        </div>
                    </div>
                ))}
            </>
        );
    }
}

export default ListFavoris;