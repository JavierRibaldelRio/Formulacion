var React = require('react');

class FilaRecords extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {


        return (<tr>

            <td>{this.props.nick}</td>

            <td>{this.props.puntos}</td>
        </tr>)
    }
}

export default FilaRecords;