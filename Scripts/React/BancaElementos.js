//Contenedor de 
class Banca extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            arrayObjeto: [...cartasDisponibles], puntosTotales: 0,
            notficacion: undefined, buenaNotificacion: true, juegoAcabado: false,
            juegoEnMarcha: false, textoBotonControl: "Empezar"
        }

    }

    //Actualiza el estado
    actualizarEstado(a) {

        this.setState({ arrayObjeto: [...cartasDisponibles], puntosTotales: Number(a + this.state.puntosTotales) });

    }

    //Función que añade el elemento robado a la clase
    anyadirCartaRobado(elementoRobado) {

        //Se utiliza concat en vez de push porqur push no se puede usar en react
        this.setState({ arrayObjeto: this.state.arrayObjeto.concat(elementoRobado) });

    }

    //Devolver las cartas disponiles al estado original

    devolverAlEstadoOriginal() {

        //Devolver las cartas disponiles al estado original
        this.setState({ arrayObjeto: [...cartasDisponibles] });

    }

    //roba una carta
    robarCarta(cartaARobar) {

        this.setState({ arrayObjeto: [...cartasDisponibles] });


        //Almmacen la ultima carta Robada


        if (cartaARobar != undefined) {

            const ultimaCartaRobada = cartaARobar;

            baraja.push(ultimaCartaRobada);
        }

        baraja.splice(0, 1);

        this.setState({ arrayObjeto: [...cartasDisponibles] });

        this.setState({ arrayObjeto: [...cartasDisponibles].concat(baraja[0]) });

        cartaRobarUsada = false;

        //Definimos cual es la carta robada

        cartaRobada = baraja[0]

        return baraja[0];
    }

    //Edita el estado conforme el imput y lo devuelve a configuración origianl
    notificar(nuevaNotificacion, nuevoEstado) {

        //Añade al estado la notificación y si es buena o mal
        this.setState({ notficacion: nuevaNotificacion, buenaNotificacion: nuevoEstado });


        //Pone un ocntador hacía atras
        setTimeout(function () {

            //Revierte el estado poniendolo en configuración original
            this.setState({ notficacion: undefined, buenaNotificacion: true });

        }.bind(this), tiempoNotificacionSegundos * 1000);    //El numero es el tiempo en milisegundos, por eso multiplico por mil


    }

    //Cambia el esta haviendo que el juego se acabe
    terminar() {
        this.setState({ juegoAcabado: true })
    }

    pausarOContinuar() {
        var nuevoTexto;

        if (this.state.juegoEnMarcha === true) {

            nuevoTexto = "Reanudar";

        } else {
            nuevoTexto = "Pausar";
        }

        this.setState({ juegoEnMarcha: !this.state.juegoEnMarcha, textoBotonControl: nuevoTexto })

    }


    render() {
        if (this.state.juegoAcabado === true) {

            return (

                <div className="Fin_Juego_Div"  >
                    <p className="Fin_Juego">EL JUEGO SE HA ACABADO, HAS OBTENIDO UN TOTAL DE {this.state.puntosTotales} PUNTOS. </p>


                </div>

            )

        } else {
            return (

                <div>

                    <div aria-disabled="true" className="Panel_control">

                        <Validacion jugando={this.state.juegoEnMarcha} funcionAlPulsar={this.actualizarEstado.bind(this)} funcionNotificar={this.notificar.bind(this)} elementosDisponibles={this.state.arrayObjeto}></Validacion>

                        <Marcador texto="Puntos" acabar={this.terminar.bind(this)} puntuacion={this.state.puntosTotales}></Marcador>

                    </div>

                    <NotificacicionUsuario texto={this.state.notficacion} tipo={this.state.buenaNotificacion} ></NotificacicionUsuario>

                    <br /><br />
                    <table className="banca">

                        <tbody>
                            <tr>
                                <td>
                                    <div className="filaElementos">

                                        <ElementoReact
                                            objeto={this.state.arrayObjeto[0]}
                                        ></ElementoReact>

                                        <ElementoReact
                                            objeto={this.state.arrayObjeto[2]}
                                        ></ElementoReact>

                                        <ElementoReact
                                            objeto={this.state.arrayObjeto[4]}
                                        ></ElementoReact>

                                        <ElementoReact
                                            objeto={this.state.arrayObjeto[6]}
                                        ></ElementoReact>

                                    </div>

                                </td>
                                <td width="30%" className="banca" colSpan="2">

                                    <div className="banca">

                                        <PilaRobar jugando={this.state.juegoEnMarcha} terminarJuego={this.terminar.bind(this)} robarUnaCarta={this.robarCarta.bind(this)} restaurar={this.devolverAlEstadoOriginal.bind(this)} anyadirAlEstadoCartaRobada={this.anyadirCartaRobado.bind(this)} ></PilaRobar>

                                    </div>
                                </td>
                            </tr>

                            <tr>

                                <td>
                                    <div className="filaElementos">

                                        <ElementoReact
                                            objeto={this.state.arrayObjeto[1]}
                                        ></ElementoReact>

                                        <ElementoReact
                                            objeto={this.state.arrayObjeto[3]}
                                        ></ElementoReact>

                                        <ElementoReact
                                            objeto={this.state.arrayObjeto[5]}
                                        ></ElementoReact>

                                        <ElementoReact
                                            objeto={this.state.arrayObjeto[7]}
                                        ></ElementoReact>

                                    </div>

                                </td>
                                {/* Botón de empezar o pausar */}
                                <td className="Panel_Control"><button className="Boton_Normal Boton_Play_Pause" onClick={this.pausarOContinuar.bind(this)}>{this.state.textoBotonControl}</button></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}