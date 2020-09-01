// import React, { Component, PureComponent } from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types'




const Animal_Images = {
    panda: 'https://goo.gl/oNbtoq',
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd'
}

const ANIMALS = Object.keys(Animal_Images)

class AnimalImage extends Component {
//otra forma de utilizar  ShouldComponentUpdated
// class AnimalImage extends PureComponent {

    state = { src: Animal_Images[this.props.animal] }

    // componentWillreiveProps modificacion a buenas practicas
    componentWillReceiveProps(nextProps) {
        console.log('1. componentWillReceiveProps')
        console.log(nextProps)


        console.log(nextProps)
        // if(this.props.animal !== nextProps.animal)
        // {
        //     console.log('componentWillReceiveProps');
        //     this.setState({src: Animal_Images[nextProps.animal] })
        // }

        /*nextProps pueden ser las mismas props que tenemos pero
        * entrara igualmente a este metodo, Nuevas props no quiere decir que sean
        * distintas a las que teniamos */
        this.setState({src: Animal_Images[nextProps.animal] })
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('componentWillReceiveProps')
    //     console.log(nextProps)
    //     // if(this.props.animal !== nextProps.animal)
    //     // {
    //     //     console.log('componentWillReceiveProps');
    //     //     this.setState({src: Animal_Images[nextProps.animal] })
    //     // }
    //
    //     /*nextProps pueden ser las mismas props que tenemos pero
    //     * entrara igualmente a este metodo, Nuevas props no quiere decir que sean
    //     * distintas a las que teniamos */
    //     this.setState({src: Animal_Images[nextProps.animal] })
    // }

    shouldComponentUpdate(nextProps) {
        console.log('2. ShouldComponentUpdated', nextProps)
        console.log('anterior', this.props.animal)
        console.log('nuevo', nextProps.animal)

        //hay que devolver un booleano
        //si este metodo no existe, se devuelve true por defecto


        return this.props.animal !== nextProps.animal
    }




    componentWillUpdate(nextProps, nextState) {
        console.log('3. componentWillUpdate', nextProps, nextState)
        const img = document.querySelector('img')
        console.log('from img element', {alt: img.alt})

        //web animation api
        img.animate([{
            filter: 'blur(0px)'
        }, {
            filter: 'blur(2px)'
        }],{
            duration:500,
            easing: 'ease'
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate', prevProps, prevState)
        const img = document.querySelector('img')

        img.animate([{
            filter: 'blur(0px)'
        }, {
            filter: 'blur(2px)'
        }],{
            duration:1500,
            easing: 'ease'
        })
        console.log('from img element', {alt: img.alt})

    }


    render(){
        console.log('4.render')
        console.log('-> render')
        return(
            <div>
                <p>Selected {this.props.animal}</p>
                <img
                    alt={this.props.animal}
                    src={this.state.src}
                    width='250'
                />
            </div>
        )
    }

}
//mejores practicas
AnimalImage.propTypes = {
    animal: PropTypes.oneOf(ANIMALS)
}

// AnimalImage.propTypes = {
//     animal: PropTypes.oneOf(['cat', 'dolphin', 'panda'])
// }



class EjemploCicloDeActualizacion extends Component {
    state = { animal: 'panda' }

    //agragar botones para mejores practicas para usar el shouldcomponentupdated
    _renderAnimalButtonShouldComponentUpdated = (animal) => {
        return (
            <button
                //disabled={animal === this.state.animal}
                key={animal}
                onClick={() => this.setState({animal})}>
                {animal}
            </button>
        )

    }


    // //agragar botones para mejores practicas
    // _renderAnimalButton = (animal) => {
    //     return (
    //         <button
    //             disabled={animal === this.state.animal}
    //             key={animal}
    //             onClick={() => this.setState({animal})}>
    //             {animal}
    //         </button>
    //     )
    //
    // }

    render() {
        return (
           <div>
               {/*<h4>Ciclo de Actualizacion, Ejemplo de: ComponentWillReciveProps</h4>*/}

               {/*{ANIMALS.map(this._renderAnimalButton)}*/}

               {/*/!*mejores practicas*!/*/}
               {/*{this._renderAnimalButton('panda')}*/}
               {/*{this._renderAnimalButton('cat')}*/}
               {/*{this._renderAnimalButton('dolphin')}*/}




               {/*<button onClick={() => this.setState({animal: 'panda'})}>panda</button>*/}
               {/*<button onClick={() => this.setState({animal: 'dolphin'})}>dolphin</button>*/}
               {/*<button onClick={() => this.setState({animal: 'cat'})}>cat</button>*/}

               {/*<AnimalImage animal={this.state.animal}/>*/}


               <h4>Ciclo de Actualizacion, Ejemplo de: ShouldComponentUpdate</h4>

               {ANIMALS.map(this._renderAnimalButtonShouldComponentUpdated)}

               {/*/!*mejores practicas*!/*/}
               {/*{this._renderAnimalButton('panda')}*/}
               {/*{this._renderAnimalButton('cat')}*/}
               {/*{this._renderAnimalButton('dolphin')}*/}




               {/*<button onClick={() => this.setState({animal: 'panda'})}>panda</button>*/}
               {/*<button onClick={() => this.setState({animal: 'dolphin'})}>dolphin</button>*/}
               {/*<button onClick={() => this.setState({animal: 'cat'})}>cat</button>*/}

               <AnimalImage animal={this.state.animal}/>




           </div>
        )
    }
}

export default EjemploCicloDeActualizacion

