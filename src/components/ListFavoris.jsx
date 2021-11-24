import React, { Component } from 'react';

class ListFavoris extends Component {
    render() {
        const { favorites, deleteCharacter} = this.props
        return (
            <>
                {favorites.map((characterFavoris, index) => (
                   <div className="col-2 my-3" >
                        <div className="border border-2 border-warning h-100 box my-3" key={characterFavoris.id}>
                            <img className="image mb-3" src={characterFavoris.imageUrl} alt="" />
                            <h4 className="text-center ">{characterFavoris.fullName}</h4>
                            <p className="text-center title">{characterFavoris.title}</p>
                            <button className="btn btn-outline-danger my-2 ms-2" onClick={() =>deleteCharacter(index)} >Supprimer</button>
                        </div>
                    </div>
                    
                ))}
              
            </>
        );
    }
}

export default ListFavoris;