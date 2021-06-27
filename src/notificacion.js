import './notificacion.css'

var React = require('react');   //Activa REACt


class NotificacicionUsuario extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {



        if (this.props.texto != undefined) {
            //Le quita los espacios del principio
            const texto = this.props.texto.trim();

            //Añade la clase en funcion que sea true o  false
            const clase = this.props.tipo ? "Notificacion_correcta" : "Notificacion_incorrecta";


            return (

                <table className={"notificacion " + clase}>

                    <tbody>

                        <tr>
                            <td>
                                {texto}
                            </td>
                        </tr>

                    </tbody>

                </table>

            )
        }

        return (
            <p></p>
        )

    }
}

export default NotificacicionUsuario;