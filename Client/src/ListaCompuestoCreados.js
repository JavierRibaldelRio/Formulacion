
var React = require('react');   //Activa REACt

class ListaCompuestos extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {

        return (
            <ul className="Fin_Juego_Visualizar_Lista_Compuestos">
                {this.props.lista.sort().map(function (item) {

                    return <li key={item}>{item}</li>
                })}

            </ul>);

    }

}

export default ListaCompuestos;