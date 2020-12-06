//Contenedor de 
class Banca extends React.Component {

    constructor(props) {

        super(props);


    }

    render() {

        return (

            <div>

                {/* Pasa las propiedades a los elementos que crean las tarjetas */}

                <ElementoReact
                    objeto={elementosDisponibles[0]}
                ></ElementoReact>

                <ElementoReact
                  objeto={elementosDisponibles[1]}
                ></ElementoReact>

                <ElementoReact
                    objeto={elementosDisponibles[2]}
                ></ElementoReact>

                <ElementoReact
                    objeto={elementosDisponibles[3]}
                ></ElementoReact>

                <ElementoReact
                   objeto={elementosDisponibles[4]}
                ></ElementoReact>

                <ElementoReact
                    objeto={elementosDisponibles[5]}
                ></ElementoReact>

                <ElementoReact
                    objeto={elementosDisponibles[6]}
                ></ElementoReact>

                <ElementoReact
                    objeto={elementosDisponibles[7]}
                ></ElementoReact>



            </div>

        )

    }
}