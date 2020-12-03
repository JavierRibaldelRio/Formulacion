//Definir la clase de react 
class ElementoReact extends React.Component {

    //constructor

    constructor(props) {

        super(props);

    }

    //funcion de devolver

    render() {

        //Lo que devuelve
        return (
            <div>

                <table className="Tabla_Elementos" >

                    <tbody>

                        {/*Número Atomico*/}
                        <tr className="Numero_Atomico">

                            <td>
                                {this.props.z}
                            </td>

                            <td rowSpan="2" colSpan="3" className="Simbolo_Quimico">
                                {this.props.sq}
                            </td>

                        </tr>

                        <tr>


                            {/* Contenedor de Valencias */}
                            <td className="Valencias">

                                {this.props.valencias}
                            </td>
                        </tr>

                        <tr>

                            {/* Puntos */}



                            <td className="Puntos">Puntos:</td>

                            <td className="Puntos">{this.props.puntos}</td>

                        </tr>

                        <tr>
                            <td className="Grupos">Grupo: </td>

                            <td className="Grupos">{this.props.grupo}</td>
                        </tr>

                        <tr>

                            {/*Nombre del Elemento*/}

                            <td colSpan="4" className="Nombre">{this.props.nombre}</td>

                        </tr>

                    </tbody>

                </table>

            </div>

        );

    }

}