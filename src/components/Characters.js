import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Characters extends Component {
    render() {
        const { fullName, title, imageUrl } = this.props.character
        const { handleFavoriteClick} = this.props
        return (
            <>
         
                <div className="col-4">
                    <div className="border border-2  my-3">
                        
                        <img className="img-thumbnail" src={imageUrl} alt="" />
                        </div>
                        <h2 className="text-center">{fullName}</h2>
                        <p className="text-center">{title}</p>
                        <button className="btn btn-primary" onClick={handleFavoriteClick} >favoris</button>
                    
                </div>
            </>
        );
    }
}

export default Characters;