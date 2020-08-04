import React, { Component } from 'react';

//----------------Ejemplo Practico  de Conditional Rendering-------------------
class LoginButton extends Component{
    render() {
        return <button>Iniciar Sesion</button>
    }

}

class LogOutButton extends Component{
    render() {
        return (
            <div>
                <p>Bienvenido Usuario!</p>
                <button>Cerrar Session</button>
            </div>
        )
    }

}
//----------------Ejemplo Practico  de Conditional Rendering-------------------


class ComponeneteA extends Component{
    render() {
        return <p>Componente A</p>
    }
}

class ComponeneteB extends Component{
    render() {
        return <p>Componente B</p>
    }
}

function useConditionalRendering(mostrarA) {
    if(mostrarA){
        return <ComponeneteA />
    }
    return <ComponeneteB />

}

export default class ConditionalSection extends Component{
    constructor() {
        super()
        this.state = { mostrarA: true, isUserLogged: false}
    }
    render() {
        const conditionalComponent = useConditionalRendering(this.state.mostrarA);
        const conditionalCompo = this.state.mostrarA ? <ComponeneteA /> : <ComponeneteB />

        return (
        <div>
            {this.state.isUserLogged ? <LoginButton /> : <LogOutButton />}
            <h4>Conditional Rendering</h4>
            {useConditionalRendering(this.state.mostrarA)}
            {conditionalComponent}
            {conditionalCompo}
            {this.state.mostrarA ? <ComponeneteA /> : <ComponeneteB />}
        </div>
        )
    }
}