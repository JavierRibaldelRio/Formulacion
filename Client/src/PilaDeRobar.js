

import ElementoReact from './ElementoReact';
import Marcador from './Marcador';

var React = require('react');   //Activa REACt

class PilaRobar extends React.Component {

    constructor(props) {
        super(props)
        this.state = { cartaARobar: undefined, mazosRestantes: 2, contador: 0 };
    }

    //Función que se ejecuta al robar
    robar() {

        //Si hay más cartas en la banca y hay más repeticiones
        if (this.state.contador < window.$baraja.length && this.state.mazosRestantes > 0) {

            this.setState({ cartaARobar: this.props.robarUnaCarta(this.state.cartaARobar) });

            this.setState({ contador: this.state.contador + 1 });

        }
        //Si no cambias el mazo
        else if (this.state.contador >= window.$baraja.length && this.state.mazosRestantes >= 0) {


            this.setState({ mazosRestantes: this.state.mazosRestantes - 1, contador: 0, cartaARobar: undefined })

        } else {
            this.props.terminarJuego();
        }
    }

    render() {


        if (this.state.cartaARobar === undefined || window.$cartaRobarUsada === true) {

            return (
                <table>
                    <tbody>

                        <tr>
                            <td></td>

                            <td>
                                <input disabled={!this.props.jugando} type="image" className="Foto_Robar" src="Fotografias/PatronCartas/patroncarta.png" height="180" width="160" onClick={this.robar.bind(this)}></input>

                            </td>

                            <td><Marcador texto="Repartos restantes" puntuacion={this.state.mazosRestantes} /> </td>
                        </tr>
                    </tbody>
                </table>
            )

        } else {

            return (
                <div className="Pila" >
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <ElementoReact objeto={this.state.cartaARobar} />
                                </td>

                                <td>
                                    <input type="image" className="Foto_Robar" src="Fotografias/PatronCartas/patroncarta.png" height="180" width="160" onClick={this.robar.bind(this)}></input>

                                </td>
                                <td>

                                    <Marcador texto="Repartos restantes" puntuacion={this.state.mazosRestantes} />

                                </td>

                            </tr>


                        </tbody>
                    </table>

                </div >
            )
        }
    }
}

export default PilaRobar;