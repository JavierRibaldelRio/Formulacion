//Contenedor de 
class Banca extends React.Component {

    constructor(props) {

        super(props);

        this.state = { arrayObjeto: elementosDisponibles }


    }

    render() {

        return (

            <div className="banca">

                {/* pasa la casilla de la matriz de elementos que hay que coger */}

                <ElementoReact
                    objeto={this.state.arrayObjeto[0]}
                ></ElementoReact>

                <ElementoReact
                    objeto={this.state.arrayObjeto[1]}
                ></ElementoReact>

                <ElementoReact
                    objeto={this.state.arrayObjeto[2]}
                ></ElementoReact>

                <ElementoReact
                    objeto={this.state.arrayObjeto[3]}
                ></ElementoReact>

                <ElementoReact
                    objeto={this.state.arrayObjeto[4]}
                ></ElementoReact>

                <ElementoReact
                    objeto={this.state.arrayObjeto[5]}
                ></ElementoReact>

                <ElementoReact
                    objeto={this.state.arrayObjeto[6]}
                ></ElementoReact>

                <ElementoReact
                    objeto={this.state.arrayObjeto[7]}
                ></ElementoReact>



            </div >

        )

    }
}