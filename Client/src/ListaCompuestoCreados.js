
var React = require('react');   //Activa REACt

class ListaCompuestos extends React.Component {

    constructor(props) {

        super(props);
    }

    render() {

        var arrayEtiquetasCompuestos = new Array();

        var listaCompuestos = this.props.lista;   //Copia el array de compuestos generados

        //Lo ordena

        listaCompuestos.sort();

        for (var i = 0; i < listaCompuestos.length; i++) {

            arrayEtiquetasCompuestos.push(<li className="Li_Compuesto_Lista" key={listaCompuestos[i] + i}>{listaCompuestos[i]}</li>)
        }



        return (

            <ul id="Lista_Compuestos" className="Fin_Juego_Visualizar_Lista_Compuestos">
                {arrayEtiquetasCompuestos.map((item) => {

                    return item
                })
                }

            </ul >);

    }

}

export default ListaCompuestos;