class Banca extends React.Component {

    constructor(props) {

        super(props);


    }

    render() {

        return (

            <div>
                
                {/* Pasa las propiedades a los elementos que crean las tarjetas */}

                <ElementoReact
                    z={elementosDisponibles[0].z}
                    nombre={elementosDisponibles[0].nombre}
                    v={elementosDisponibles[0].v}
                    sq={elementosDisponibles[0].sq}
                    puntos={elementosDisponibles[0].puntos}
                    grupo={elementosDisponibles[0].grupo}
                ></ElementoReact>

            </div>

        )

    }
}