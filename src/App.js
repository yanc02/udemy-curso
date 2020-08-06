import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contadores from "./Contador";
import ConditionalSection from "./sections/conditional";
import cars from './data/cars.json'
import Forms from "./sections/forms";

class CarItem extends Component{
    render() {
        const { car, id } = this.props
        return (
            <li>
                <p>Key: {id}</p>
                <p><strong>Nombre: </strong>{car.name}</p>
                <p><strong>Marca: </strong>{car.company}</p>

            </li>
        )
    }

}

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

class ContadorSetState extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.contadorInitial)
        this.state = {contador: this.props.contadorInitial}
        setInterval(() => {
            this.setState({contador: this.state.contador + 1})
        }, 1000)
    }

    render() {
        return (<ContadorNumero numero={this.state.contador}/>)
    }
}

ContadorSetState.defaultProps = {contadorInitial: 0}

class ContadorNumero extends Component{
    render() {
     console.log('ContadorNumero render()')
        return <span>{this.props.numero}</span>
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
    constructor() {
        super()
        this.state = {mouseX: 0, mouseY: 0}
        this.handleMouseMove = this.handleMouseMove.bind(this)

    }

    handleMouseMove (e) {
        const { clientX, clientY } = e
        this.setState({mouseX: clientX, mouseY: clientY})
    }

    handleMouseMoved = (e) => {
        const { clientX, clientY } = e
        this.setState({mouseX: clientX, mouseY: clientY})
    }

    handleClick (e) {
        console.log(e)
        // console.log(e.nativeEvent)
        alert('hi there!!')
    }
  render() {
      const numbers = [1, 1, 3, 4, 5]
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Hello title = 'Hello from props' />
            <HelloWithConst title = 'Hello from props with const' />
            <HelloWithClass title = 'Hello from props with another class' />
            <Contadores/>
            <EstadoComponenteSegundo/>
            <ContadorSetState contadorInitial={100}/>
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
              <ConditionalSection />

              <h4>Trabajando con Lista</h4>

              {numbers.map((number, index) => { return <p key={index}>Soy el Numero {number}</p>})}

              <h4>Trabajando con Lista de Json</h4>
              <ul>
                  {
                    cars.map(car => {
                        return (
                          <li key = {car.id}>
                              <p><strong>Nombre: </strong>{car.name}</p>
                              <p><strong>Marca: </strong>{car.company}</p>

                          </li>
                        )
                  })
              }
              </ul>
              <h4>Trabajando con Lista de Json en componenete</h4>

              <ul>
                  {
                      cars.map(car => {
                          return <CarItem id={car.id} key = {car.id} car = {car} />
                      })
                  }
              </ul>

              <h4>Eventos</h4>
              <button onClick={() => alert('Hi here!')}>Hi there!</button>

              {/*<h4>Eventos Sintetico</h4>*/}
              {/*<button onClick={this.handleClick()}>Hi there!</button>*/}

              <div
                  onMouseMove={this.handleMouseMove}
                  style={{ border: '1px solid #000', marginTop: 10, padding: 18 }}>
                  <p>{this.state.mouseX}, {this.state.mouseY}</p>
              </div>

              <h4>Formas mas Limpia</h4>

              <div
                  onMouseMove={this.handleMouseMoved}
                  style={{ border: '1px solid #000', marginTop: 10, padding: 18 }}>
                  <p>{this.state.mouseX}, {this.state.mouseY}</p>
              </div>

              <h4>Formularios</h4>

              <Forms/>


          </header>
        </div>
    );
  }

}


export default App;
