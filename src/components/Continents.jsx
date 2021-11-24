import React, { Component } from 'react';

class Continents extends Component {
    constructor() {
        super()

        this.state = {
            continents: [],
        }
    }


    componentDidMount() {
        fetch("https://thronesapi.com/api/v2/Continents")
            .then(result => result.json())
            .then(result => {
                this.setState({ continents: result })
                // console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
                {this.state.continents.map(continent => (
                 
                    <p className="text-light">{continent.name}</p>
                      
                ))}
            </>
        );
    }
}

export default Continents;