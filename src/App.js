import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contadores from "./Contador";


class HelloWithClass extends Component{
    render() {
        return <h2>{this.props.title}</h2>
    }

}

function Hello (props) {
    return <h2 style={{color: "white"}}>{props.title}</h2>
}

const HelloWithConst = (props) => <h2>{props.title}</h2>

class TitleText extends Component {
    render() {
        return <h1>{this.props.text}</h1>
    }
}

TitleText.defaultProps = { text: 'Text por defecto'}


class Contador extends Component{
    constructor() {
        super();
        this.state = {contador: 1}
    }

    render() {
        return <span>{this.state.contador}</span>
    }

}

class EstadoComponente extends Component {
    constructor(props) {
        super(props);
        this.state = {cont: 2}
    }
    render() {
        return(
          <div>
              <h2>El Contador esta a {this.state.cont}</h2>
          </div>
        );
    }

}


class EstadoComponenteSegundo extends Component {
   state = {contar: 0};
    render() {
        return(
            <div>
                <h2>El Contador segundo esta a {this.state.contar}</h2>
            </div>
        );
    }

}


class Text extends Component{
    render() {
        const { isActivated, arrayofNumbers, multiply, title } = this.props

        const textSegunBolean = isActivated? 'Cierto' : 'Negativo'
        const mappedNumbers = arrayofNumbers.map(multiply)
        return <div>
            <p>Propiedades del titulo: {title}</p>
            <p>Propiedades de text: {this.props.text}</p>
            <p>Propiedades de number: {this.props.number}</p>
            {/*<p>{JSON.stringify(this.props.boolean)}</p>*/}
            <p>Constante textSegunBolean: {textSegunBolean}</p>
            <p>Propiedades de arrayofNumbers con espacio y comas:{this.props.arrayofNumbers.join(', ')}</p>
            <p>Constante mappedNumbers: {mappedNumbers.join(', ')}</p>
            <p>Objeto de objectWithInfo: {this.props.objectWithInfo.key2}</p>


        </div>
    }

}

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Hello title = 'Hello from props' />
            <HelloWithConst title = 'Hello from props with const' />
            <HelloWithClass title = 'Hello from props with another class' />
            <Contadores/>
            <EstadoComponenteSegundo/>
            <TitleText/>
            <Contador />
            <EstadoComponente/>

              <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
              <Text
                  arrayofNumbers={[2,3,10]}
                  objectWithInfo = {{key: 'First value', key2: 'otherValue'}}
                  multiply={(number) => number * 4}
                  number={2}
                  text='Texto en string'
                  title={<h1>Este es el Titulo</h1>}
                  isActivated={false}/>
          </header>
        </div>
    );
  }

}


export default App;
