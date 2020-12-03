//Definir la clase de react 
class ElementoReact extends React.Component {

    //constructor

    constructor(props) {

        super(props);

        this.state = { valencias: this.props.v };

    }

    //funcion de devolver

    render() {

        
        for(var i = 0; i < this.state.valencias.length; i++){

            this.state.valencias = this.state.valencias.toString().replace(","," ");

        }
        //Lo que devuelve
        return (

                <table className="Tabla_Elementos" >

                    <tbody>

                        {/*Número Atómico*/}
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

                                {this.state.valencias}
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


        );

    }

}