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
                    z={elementosDisponibles[0].z}
                    nombre={elementosDisponibles[0].nombre}
                    v={elementosDisponibles[0].v}
                    sq={elementosDisponibles[0].sq}
                    puntos={elementosDisponibles[0].puntos}
                    grupo={elementosDisponibles[0].grupo}
                ></ElementoReact>

                <ElementoReact
                    z={elementosDisponibles[1].z}
                    nombre={elementosDisponibles[1].nombre}
                    v={elementosDisponibles[1].v}
                    sq={elementosDisponibles[1].sq}
                    puntos={elementosDisponibles[1].puntos}
                    grupo={elementosDisponibles[1].grupo}
                ></ElementoReact>

                <ElementoReact
                    z={elementosDisponibles[2].z}
                    nombre={elementosDisponibles[2].nombre}
                    v={elementosDisponibles[2].v}
                    sq={elementosDisponibles[2].sq}
                    puntos={elementosDisponibles[2].puntos}
                    grupo={elementosDisponibles[2].grupo}
                ></ElementoReact>

                <ElementoReact
                    z={elementosDisponibles[3].z}
                    nombre={elementosDisponibles[3].nombre}
                    v={elementosDisponibles[3].v}
                    sq={elementosDisponibles[3].sq}
                    puntos={elementosDisponibles[3].puntos}
                    grupo={elementosDisponibles[3].grupo}
                ></ElementoReact>

                <ElementoReact
                    z={elementosDisponibles[1 + 3].z}
                    nombre={elementosDisponibles[1 + 3].nombre}
                    v={elementosDisponibles[1 + 3].v}
                    sq={elementosDisponibles[1 + 3].sq}
                    puntos={elementosDisponibles[1 + 3].puntos}
                    grupo={elementosDisponibles[1 + 3].grupo}
                ></ElementoReact>

                <ElementoReact
                    z={elementosDisponibles[3 + 2].z}
                    nombre={elementosDisponibles[3 + 2].nombre}
                    v={elementosDisponibles[3 + 2].v}
                    sq={elementosDisponibles[3 + 2].sq}
                    puntos={elementosDisponibles[3 + 2].puntos}
                    grupo={elementosDisponibles[3 + 2].grupo}
                ></ElementoReact>

                <ElementoReact
                    z={elementosDisponibles[3 + 3].z}
                    nombre={elementosDisponibles[3 + 3].nombre}
                    v={elementosDisponibles[3 + 3].v}
                    sq={elementosDisponibles[3 + 3].sq}
                    puntos={elementosDisponibles[3 + 3].puntos}
                    grupo={elementosDisponibles[3 + 3].grupo}
                ></ElementoReact>

                <ElementoReact
                    z={elementosDisponibles[3 + 4].z}
                    nombre={elementosDisponibles[3 + 4].nombre}
                    v={elementosDisponibles[3 + 4].v}
                    sq={elementosDisponibles[3 + 4].sq}
                    puntos={elementosDisponibles[3 + 4].puntos}
                    grupo={elementosDisponibles[3 + 4].grupo}
                ></ElementoReact>



            </div>

        )

    }
}