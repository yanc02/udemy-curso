import React, { Component } from 'react';


class EjemploDeComponenteDidMount extends Component {
    constructor(props) {
        super(props);
        this.state = { scroll: 0 }
    }

    componentWillMount() {
        console.log('componentWillMount de EjemploDeComponenteDidMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
        document.addEventListener('scroll', () => {
            this.setState({ scroll: window.scrollY })

        })
    }

    render() {
        console.log('render de ComponentDidMount')
        return (
            <div>
                <h4>Ciclo de montaje: componenteDidMount</h4>
                <p>El escroll es {this.state.scroll}</p>
                <p>Este componente nos muestra como podemos usar el componentDidMount.</p>
                <p>Como queremos añadir un evento scroll, vamos a hacer la ventana que sea lo suficientemente grande
                    para que tenga que empujar el contenido hacia abajo y haga que no quepa toto contenido en el alto de
                    la pagina. De esta forma podremos utilizar el evento para controlar cuando el usuario este
                    moviendose por el scroll</p>
                <p>Lorem fistrum benemeritar condemor torpedo diodenno me cago en tus muelas no puedo al ataquer
                    llevarme al sircoo apetacan. Ahorarr Ahorrar llevame al sirco esta la cosa muy mala. Diodeno jarl
                    caballo blanco caballo negroorl ese pedazo de ese hombrree amatomaa papparr papaar ese pedazo de.
                    Hasta luego Lucas por la gloria de mi madre se calle ustee hasta luego Lucas torpedo llevame al
                    sircoo por la gloria de mi madre ahorrar diodeno a peich a wan. Papaar papaar esta la cosa muy mala
                    no te digo trigo por no llamarte Rodrigor condemor de la pradera hasta luego Lucas.</p>
                <p>Fistro hasta luego Lucas te va hase pupitaa me cago en tus muelas. A wan diodeno diodeno torpedo.
                    Pupita a gramenawer tiene musho peligro mamaar ese que llega papaar papaar diodeno diodenoo pecador.
                    Mamaar fistro no puedo hasta luego Lucas condemor pupita ese pedazo de me ago en tus muelas
                    benemeritaar. A wan jarl tiene musho peligro ahorarr torpedo pupita por la gloria de mi madre.</p>
            </div>
        )
    }
}

export default EjemploDeComponenteDidMount

