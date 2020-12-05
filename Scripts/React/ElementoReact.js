//Definir la clase de react 
class ElementoReact extends React.Component {

    //constructor

    constructor(props) {

        super(props);

        //Coge las valencias
        this.state = { valencias: this.props.v };

    }

    //funcion de devolver

    render() {

        //Se ejecuta una vez por cada valencia
        for (var i = 0; i < this.state.valencias.length; i++) {

            //Remplaza las comas por en espacio
            this.state.valencias = this.state.valencias.toString().replace(",", " ");

        }

        //Lo que devuelve
        return (

            //Crea la tabla
            <table className="Tabla_Elementos" >

                <tbody>

                    <tr className="Numero_Atomico">
                        {/*Número Atómico*/}

                        <td>
                            {this.props.z}
                        </td>

                        {/* Simbolo Químico */}
                        <td rowSpan="2" colSpan="3" className="Simbolo_Quimico">
                            {this.props.sq}
                        </td>

                    </tr>

                    <tr>


                        {/* Contenedor de Valencias */}
                        <td className="Valencias">

                            {this.state.valencias}
                        </td>
                    </tr>

                    <tr>

                        {/* Puntos */}

                        <td className="Texto_dentro_de_tabla">Puntos:</td>

                        <td className="Puntos">{this.props.puntos}</td>

                    </tr>
{/* Grupo */}
                    <tr>
                        <td className="Texto_dentro_de_tabla">Grupo: </td>

                        <td className="Grupos">{this.props.grupo}</td>
                    </tr>

                    <tr>

                        {/*Nombre del Elemento*/}

                        <td colSpan="4" className="Nombre Texto_dentro_de_tabla">{this.props.nombre}</td>

                    </tr>

                </tbody>

            </table>


        );

    }

}