var React = require('react');   //Activa REACt
const { default: FilaRecords } = require('./FilaRecords');

class TablaRecords extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {




        return (

            <table>
                <tbody>
                    <tr>
                        <th>Nickname</th>
                        <th>Puntos</th>
                    </tr>

                    {this.props.records.map((record) => { return <FilaRecords nick={record.nick} puntos={record.puntos} /> })}

                </tbody>

            </table>
        )


    }
}

export default TablaRecords