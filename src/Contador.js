import React, { Component } from 'react';


class Contadores extends Component {
    state = { contador: 1};
    render() {
        return(
            <div>
                <h2>Contador: {this.state.contador}</h2>

            </div>
        );
    }
}

export default Contadores;