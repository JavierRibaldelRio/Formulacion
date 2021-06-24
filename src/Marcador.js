var React = require('react');   //Activa REACt


class Marcador extends React.Component {

    constructor(props) {

        super(props);

    }

    //Lo que se devulve
    render() {

        //El html
        return (
            ///*Tabla donde estan los puntos*/}

            <table className="Zona_Verificacion">

                <tbody>

                    <tr>

                        <td>{this.props.texto}:</td>

                        <td>{this.props.puntuacion}</td>

                    </tr>

                </tbody>

            </table>
        )
    }

}

export default Marcador;