//Definir la clase de react 
class ElementoReact extends React.Component {

    //constructor

    constructor(props) {

        super(props);

        //Coge las valencias del objeto
        this.state = { valencias: this.props.objeto.v };

    }



    //funcion de devolver

    render() {
        
        //Hace lque las valencias seán iguales que las del objeto del elemento
        this.state.valencias = this.props.objeto.v;

        //Se ejecuta una vez por cada valencia
        for (var i = 0; i < this.state.valencias.length; i++) {

            //Remplaza las comas por en espacio
            this.state.valencias = this.state.valencias.toString().replace(",", " ");

        }

        //Lo que devuelve
        return (


            //Crea la tabla

            <table className={"Tabla_Elementos " + this.props.objeto.tipo} >

                <tbody >

                    <tr className="Numero_Atomico" >
                        {/*Número Atómico*/}

                        <td>
                            {this.props.objeto.z}
                        </td>

                        {/* Simbolo Químico */}
                        <td rowSpan="2" colSpan="3" className="Simbolo_Quimico">
                            {this.props.objeto.sq}
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

                        <td className="Puntos">{this.props.objeto.puntos}</td>

                    </tr>
                    {/* Grupo */}
                    <tr>
                        <td className="Texto_dentro_de_tabla">Grupo: </td>

                        <td className="Grupo">{this.props.objeto.grupo}</td>
                    </tr>

                    <tr>

                        {/*Nombre del Elemento*/}

                        <td colSpan="4" className="Nombre Texto_dentro_de_tabla">{this.props.objeto.nombre}</td>

                    </tr>

                </tbody>

            </table>


        );

    }

}
