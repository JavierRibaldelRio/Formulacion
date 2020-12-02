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

                <table border="black">

                    <tbody>

                        {/*Número Atomico*/}
                        <tr>

                            <td colSpan="2">
                                22
                            </td>

                        </tr>

                        <tr>


                            {/* Contenedor de Valencias */}
                            <td>

                                -1

                            </td>

                            {/* Simbolo Químico */}

                            <td>
                                Ag
                            </td>


                        </tr>

                        <tr>

                            {/* Puntos */}

                            <td>adf</td>

                            {/*Grupo*/}

                            <td>12</td>

                        </tr>

                        <tr>

                            {/*Nombre del Elemento*/}

                            <td colSpan="2">Plata</td>

                        </tr>

                    </tbody>

                </table>

            </div>

        );

    }

}