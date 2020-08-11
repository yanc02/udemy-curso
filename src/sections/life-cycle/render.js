import React, { Component } from 'react';


const HelloRender = (props) => <h1>Hola render!!!</h1>

class Render extends Component {
    constructor(props) {
        super(props)
        this.state = {mensaje: 'mensaje inicial render'}
    }
    componentDidMount() {
        console.log('componentWillMount')
    }
    render() {
        console.log('render class')
        return [
            <h1 key='A'>Primer elemento</h1>,
            <HelloRender key='B'/>,
            <HelloRender key='C' />,
            <h3 key='D'>Cuarto Elemento</h3>

        ]
    }
}

export default Render

