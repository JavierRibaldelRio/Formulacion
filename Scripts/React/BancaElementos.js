//Contenedor de 
class Banca extends React.Component {

    constructor(props) {

        super(props);

        this.state = { arrayObjeto: [...cartasDisponibles], puntosTotales: 0, notficacion: undefined, buenaNotificacion: true }


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



    render() {

        return (

            <div>

                <div className="Panel_control">

                    <Validacion funcionAlPulsar={this.actualizarEstado.bind(this)} funcionNotificar={this.notificar.bind(this)} elementosDisponibles={this.state.arrayObjeto}></Validacion>

                    <Marcador texto="Puntos" puntuacion={this.state.puntosTotales}></Marcador>

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

                                    <PilaRobar robarUnaCarta={this.robarCarta.bind(this)} restaurar={this.devolverAlEstadoOriginal.bind(this)} anyadirAlEstadoCartaRobada={this.anyadirCartaRobado.bind(this)} ></PilaRobar>

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

                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}