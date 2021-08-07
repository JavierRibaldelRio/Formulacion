var React = require('react');   //Activa REACt
const { default: FilaRecords } = require('./FilaRecords');

class TablaRecords extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {

        //Crea una array que almacena el contenido de la tabla
        var contenidoTabla = [];

        //Copia records
        var records = this.props.records;
        //Se repite una vez por cada uno de los records
        for (var i = 0; i < records.length; i++) {

            //Añade el numero más uno para edivar que salga el número cero, los puntos y el nombr ede usuaroi
            contenidoTabla.push(<FilaRecords n={i + 1} nick={records[i].nick} puntos={records[i].puntos} />);

        }



        return (


            <table id="Tabla_Records">
                <tr>
                    <th>POSICIÓN</th>
                    <th>NICKNAME</th>
                    <th>PUNTOS</th>
                </tr>

                {//Enseña todos los contenidos de la tabal

                    contenidoTabla.map((v) => {
                        return (v);
                    })

                }

            </table>

        )


    }
}

export default TablaRecords