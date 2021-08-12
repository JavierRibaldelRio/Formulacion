var React = require('react');

class FilaRecords extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {


        return (<tr>

            <td>{this.props.n}</td>

            <td>{this.props.nick}</td>

            <td>{this.props.puntos}</td>

            <td>{this.props.compuestos}</td>
        </tr>)
    }
}

export default FilaRecords;