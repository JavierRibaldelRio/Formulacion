//Contenedor de 
class Banca extends React.Component {

    constructor(props) {

        super(props);

        this.state = { arrayObjeto: [...cartasDisponibles], puntosTotales: 0 }


    }

    actualizarEstado(a) {

        this.setState({ arrayObjeto: [...cartasDisponibles], puntosTotales: Number(a) });

    }

    //Función que añade el elemento robado a la clase
    anyadirCartaRobado(elementoRobado) {

        //Se utiliza concat en vez de push porqur push no se puede usar en react
        this.setState({ arrayObjeto: this.state.arrayObjeto.concat(elementoRobado) });

    }

    devolverAlEstadoOriginal(e) {
        if (e != undefined) {

            //Añadir a la ultima casilla del array la carta añadida
            baraja.push(e[0]);

            //DEvolver la baraja al estado original

            //////////////////////////////////////////////
        }
    }

    render() {

        return (

            <div>

                <Validacion funcionAlPulsar={this.actualizarEstado.bind(this)} elementosDisponibles={this.state.arrayObjeto}></Validacion>

                <Marcador puntuacion={this.state.puntosTotales}></Marcador>
                <table className="banca">

                    <tbody>
                        <tr>
                            <td>
                                <div>

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
                            <td width="50%" className="banca" colSpan="2">

                                <div className="banca">

                                    <PilaRobar eliminarCartaRobada={this.devolverAlEstadoOriginal.bind(this)} anyadirAlEstadoCartaRobada={this.anyadirCartaRobado.bind(this)} ></PilaRobar>

                                </div>
                            </td>
                        </tr>

                        <tr>

                            <td>
                                <div>

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