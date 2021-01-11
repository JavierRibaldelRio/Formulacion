class Validacion extends React.Component {

    constructor(props) {

        super(props);

        this.state = { text: " " };    //Estado

    }


    //Añadir al estao el valor del input
    cambiarTexto(e) {


        this.setState({ text: e.target.value });

    }

    //Ejecutar la función de pasarcompuesto
    pasarDatosFuncionCompuesto() {

        const elementosDisponiblesOrdenados = this.props.elementosDisponibles.sort(function (a, b) {
            if (a.z > b.z) {
                return 1;
            }
            else if (a.z < b.z) {
                return -1;
            }
            else {
                return 0;
            }
        });


        const salida = comprobarCompuesto(elementosDisponiblesOrdenados, this.state.text);


        if (typeof salida === "number") {

            this.props.funcionNotificar("Has obtenido " + salida + " puntos.", true);


            //Actualiza el estado
            this.props.funcionAlPulsar(salida);

        } else if (salida === false) {

            this.props.funcionNotificar("Este compuesto no se puede crear", false);

        }

        if (baraja.lenght < 10) {
            this.props.acabar();
        }
    }

    //Lo que devulve
    render() {

        return (


            <table className="Zona_Verificacion">

                <tbody>

                    <tr>

                        <td>

                            Inserte el compuesto:

                        </td>

                    </tr>

                    <tr>
                        <td>
                            <input onChange={this.cambiarTexto.bind(this)} />

                        </td>

                    </tr>

                    <tr>

                        <td>
                            {/*Boton */}
                            <button disabled={!this.props.jugando} className="Boton_Verificacion Boton_Normal" onClick={this.pasarDatosFuncionCompuesto.bind(this)}>Validar</button>

                        </td>

                    </tr>

                </tbody>
            </table>



        )



    }

}