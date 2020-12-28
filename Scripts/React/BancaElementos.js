//Contenedor de 
class Banca extends React.Component {

    constructor(props) {

        super(props);

        this.state = { arrayObjeto: cartasDisponibles, puntosTotales: 0 }


    }

    actualizarEstado(a) {

        this.setState({ arrayObjeto: cartasDisponibles, puntosTotales: Number(a) });

    }

    render() {

        return (

            <div>

                <Validacion funcionAlPulsar={this.actualizarEstado.bind(this)}></Validacion>

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

                                    <PilaRobar></PilaRobar>

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