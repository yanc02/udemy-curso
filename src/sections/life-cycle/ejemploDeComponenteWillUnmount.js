import React, { Component } from 'react';





class ComponenteADesmontar extends Component {
    state = { windowWidth: 0}

    _updateStateWithWindowWith = () => {
        console.log('_updateStateWithWindowWith')
        this.setState({ windowsWith: document.body.clientWidth })
    }

    componentDidMount() {
        this._updateStateWithWindowWith()
        window.addEventListener(
            'resize',
            this._updateStateWithWindowWith
        )
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        window.removeEventListener(
            'resize',
            this._updateStateWithWindowWith
        )
    }


    render() {
        return (
            <div>
                <p>Ancho de la ventana: {this.state.windowWidth}</p>
            </div>
        )
    }
}





class EjemploDeComponenteWillUnmount extends Component {
    state = { mostrarComponente: true}

    render() {
        if(this.state.mostrarComponente){
            return (
                <div>
                    <h4>Ciclo de desmontaje: ComponenteWillUnmount</h4>
                    <ComponenteADesmontar />

                    <button onClick={() => this.setState({mostrarComponente: false})} >
                        Desmontar Componente
                    </button>

                </div>
            )
        }
        return(
            <p>Componente Desmontado</p>
        )



    }
}

export default EjemploDeComponenteWillUnmount

