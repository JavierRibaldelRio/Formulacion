import comprobarCompuesto from './funcionCompuesto';
import reproducirSonido from './ReproducirMusica';


var React = require('react');   //Activa REACt
//


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
    pasarDatosFuncionCompuesto(e) {
        e.preventDefault();

        document.getElementById("veri").reset();        //Almacena en forma de variable las propiedades
        var elementosDisponiblesOrdenados = [...this.props.elementosDisponibles]

        //Ordena
        elementosDisponiblesOrdenados = elementosDisponiblesOrdenados.sort(function (a, b) {
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


        //Salida de la función que se ocupa de comprobar si el compuesro es correcto
        const salida = comprobarCompuesto(elementosDisponiblesOrdenados, this.state.text);

        //Si la salida es un número
        if (typeof salida === "number") {

            //Manda la notificación de correcto
            this.props.funcionNotificar("Has obtenido " + salida + " puntos.", true);

            //Reproduce el sonido de correcto

            reproducirSonido(true);

            //Actualiza el estado
            this.props.funcionAlPulsar(salida, this.state.text.toLocaleLowerCase());

        }

        //Si es falso
        else if (salida === false) {

            //Reproduce el sonido de incorrecto

            reproducirSonido(false);

            //manda la notificación
            this.props.funcionNotificar("Este compuesto no se puede crear", false);

        }

        //Saca el número de caratas restantes real, se le resta  porque al acabar el juego tienen que quedarte menos de ocho cartas
        let cartasRestantes = window.$baraja.length - 8;

        if (cartasRestantes < 0) {
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
                            <form id="veri" onSubmit={this.pasarDatosFuncionCompuesto.bind(this)}>

                                <input onChange={this.cambiarTexto.bind(this)} />
                                <br></br>


                                {/*Boton */}
                                <button type="submit" disabled={!this.props.jugando} className="Boton_Verificacion Boton_Normal" >Validar</button>

                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Validacion;