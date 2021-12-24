

import ElementoReact from './ElementoReact';
import Marcador from './Marcador';

var React = require('react');   //Activa REACt

class PilaRobar extends React.Component {

    constructor(props) {
        super(props)
    }

    //Función que se ejecuta al robar
    robar() {

        //Si hay más cartas en la banca y hay más repeticiones
        if (window.$baraja.length <= 8) {

            this.props.terminarJuego();

        }
        else {

            this.props.robarUnaCarta();

        }
    }

    render() {

        var cartasRestantes = window.$baraja.length;


        if (window.$cartaRobada === undefined || window.$cartaRobarUsada === true) {

            return (
                <table>
                    <tbody>

                        <tr>
                            <td></td>

                            <td>
                                <input disabled={!this.props.jugando} type="image" className="Foto_Robar" src="Fotografias/PatronCartas/patroncarta.png" height="180" width="160" onClick={this.robar.bind(this)} alt="Pulse aqui para robar"></input>

                            </td>

                            <td><Marcador texto="Cartas restantes" puntuacion={(cartasRestantes - 8)} /> </td>
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
                                    <ElementoReact objeto={window.$cartaRobada} />
                                </td>

                                <td>
                                    <input type="image" className="Foto_Robar" src="Fotografias/PatronCartas/patroncarta.png" height="180" width="160" alt="Pulse aqui para robar" onClick={this.robar.bind(this)}></input>

                                </td>
                                <td>

                                    <Marcador texto="Cartas restantes" puntuacion={(cartasRestantes - 8)} />

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