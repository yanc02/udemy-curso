import React, { Component } from 'react';

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

export default class ConditionalSection extends Component{
    render() {
        return (
        <div>
            <p>Componente A</p>
        </div>
        )
    }
}