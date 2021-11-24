import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { text, handleClick } = this.props
        return (
            <button
                type="button"
                className="btn btn-warning my-3"
                onClick={() => handleClick(text)}
            >
                Personnages favoris
            </button>
        );
    }
}

export default Button;