class PilaRobar extends React.Component {

    constructor(props) {
        super(props)
        this.state = { cartaARobar: undefined, mazosRestantes: 3, contador: 0, cartaRobada: undefined };
    }

    //Función que se ejecuta al robar
    robar() {

        console.log("fds")
        //Si hay más cartas en la banca
        if (Number(this.state.contador) < baraja.length) {

            //Elimina la anterior
            this.props.eliminarCartaRobada(this.state.cartaRobada);


            //Selecionar carta a Robar
            this.setState({ cartaARobar: baraja[0] });

            //Suma uno al contador
            this.setState({ cartaRobada: baraja.splice(0, 1), contador: this.state.contador + 1 });

            //Eliminar carta anterior

            //Actualizar Baraja Posible

            this.props.anyadirAlEstadoCartaRobada(this.state.cartaARobar);

        }
        //Si no cambias el mazo
        else if (this.state.contador >= baraja.length) {

            this.setState({ mazosRestantes: this.state.mazosRestantes - 1, contador: 0, cartaARobar: undefined })

        }
    }

    render() {
        if (this.state.cartaARobar === undefined) {

            return (
                <table>
                    <tbody>

                        <tr>
                            <td></td>

                            <td>
                                <input type="image" className="Foto_Robar" src="Fotografias/PatronCartas/patroncarta.png" height="200" width="160" onClick={this.robar.bind(this)}></input>

                            </td>
                        </tr>
                    </tbody>
                </table>
            )

        } else {

            return (
                <div className="Pila" >
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <ElementoReact objeto={this.state.cartaARobar} />
                                </td>

                                <td>
                                    <input type="image" className="Foto_Robar" src="Fotografias/PatronCartas/patroncarta.png" height="200" width="160" onClick={this.robar.bind(this)}></input>

                                </td>

                            </tr>


                        </tbody>
                    </table>



                </div >
            )
        }
    }
}