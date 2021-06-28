import './App.css';       //Importa la hoja de estilo App
import './main.css';
import './notificacion.css';
import './tipografias.css';
import './elementos.css';

import ListaCompuestos from './ListaCompuestoCreados';
import Marcador from './Marcador';
import Validacion from './Validar';
import ElementoReact from './ElementoReact';
import NotificacicionUsuario from './notificacion';
import PilaRobar from './PilaDeRobar';

//Variables a Importar

import baraja from './main';
import numeroDeCartas from './palabrasClaves';
import { tiempoNotificacionSegundos } from './palabrasClaves';




var React = require('react');   //Activa REACt

class App extends React.Component {
  constructor(props) {

    super(props);

    //Define las propiedades
    this.state = {
      arrayObjeto: [...baraja.splice(0, numeroDeCartas)], puntosTotales: 0,
      notficacion: undefined, buenaNotificacion: true, juegoAcabado: false,
      juegoEnMarcha: false, textoBotonControl: "Empezar", compuestosCreados: [],
    }

  }

  //Actualiza el estado y suma los puntos
  actualizarEstado(a, nuevoCompuestoCreado) {

    this.setState({
      arrayObjeto: [...window.$cartasDisponibles],
      puntosTotales: Number(a + this.state.puntosTotales),
      compuestosCreados: this.state.compuestosCreados.concat(nuevoCompuestoCreado)
    });

  }

  //Función que añade el elemento robado a la clase
  anyadirCartaRobado(elementoRobado) {

    //Se utiliza concat en vez de push porqur push no se puede usar en react
    this.setState({ arrayObjeto: this.state.arrayObjeto.concat(elementoRobado) });

  }

  //Devolver las cartas disponiles al estado original

  devolverAlEstadoOriginal() {

    //Devolver las cartas disponiles al estado original
    this.setState({ arrayObjeto: [...window.$cartasDisponibles] });

  }

  //roba una carta
  robarCarta(cartaARobar) {


    //Elimina la 1ª casilla del array baraja
    baraja.splice(0, 1);

    this.setState({ arrayObjeto: [...window.$cartasDisponibles].concat(baraja[0]) });

    //Dice que carta robar usada es igual a falso
    window.$cartaRobarUsada = false;

    //Definimos cual es la carta robada

    window.$cartaRobada = baraja[0]

    //Devolvemos baraja [0]
    return baraja[0];
  }

  //Edita el estado conforme el imput y lo devuelve a configuración origianl
  notificar(nuevaNotificacion, nuevoEstado) {

    //Añade al estado la notificación y si es buena o mal
    this.setState({ notficacion: nuevaNotificacion, buenaNotificacion: nuevoEstado });


    //Pone un ocntador hacía atras
    setTimeout(function () {

      //Revierte el estado poniendolo en configuración original
      this.setState({ notficacion: undefined, buenaNotificacion: true });

    }.bind(this), tiempoNotificacionSegundos * 1000);    //El numero es el tiempo en milisegundos, por eso multiplico por mil


  }

  //Cambia el esta haviendo que el juego se acabe
  terminar() {

    //Hace que juego acabado sea igual a verdadero
    this.setState({ juegoAcabado: true })
  }

  //Pausa o despausa el texto
  pausarOContinuar() {

    var nuevoTexto; //Texto que va a contener el texto

    //Comprueba si juego esta en marcha
    if (this.state.juegoEnMarcha === true) {

      //Asigna el nuevo texto
      nuevoTexto = "Reanudar";

    } else {
      nuevoTexto = "Pausar";
    }

    //Invierte el valor de 
    this.setState({ juegoEnMarcha: !this.state.juegoEnMarcha, textoBotonControl: nuevoTexto })

  }


  //Lo que devolvera el componente APP
  render() {
    //Sí el juego ha acabdo
    if (this.state.juegoAcabado === true) {

      return (

        <div>
          <div className="Fin_Juego_Div Fin_Juego"  >
            <p className="Fin_Juego">EL JUEGO SE HA ACABADO, HAS OBTENIDO UN TOTAL DE {this.state.puntosTotales} PUNTOS, Y FORMULADO {this.state.compuestosCreados.length} COMPUESTOS. </p>
            <br></br>

            <ListaCompuestos lista={this.state.compuestosCreados}></ListaCompuestos>

            <form className="Panel_Control">

              <button className="Boton_Play_Pause Boton_Normal">Volver a Jugar</button>

            </form>


          </div>


        </div>

      )

    } else {
      //Almacena la ID de el boton lo cual hace que que cambie le tamaño del botón
      var idBoton, botonAcabar;    // Almacena el 
      if (this.state.textoBotonControl === "Empezar") {
        idBoton = "Empezar";

        //Almacena lo que pondrá
        botonAcabar = <p></p>;
      }

      else {
        idBoton = "Boton_de_Control";
        //Almacena el botón que creará cuando se este jugando
        botonAcabar = <button id={idBoton} onClick={this.terminar.bind(this)} className="Boton_Normal Boton_Play_Pause">Terminar</button>

      }

      return (

        <div>

          <div aria-disabled="true" className="Panel_Control">

            <Validacion jugando={this.state.juegoEnMarcha} funcionAlPulsar={this.actualizarEstado.bind(this)} funcionNotificar={this.notificar.bind(this)} elementosDisponibles={this.state.arrayObjeto}></Validacion>
            <table className="Tabla_Marca">
              <tbody>
                <tr>
                  <td>
                    <Marcador texto="Puntos" acabar={this.terminar.bind(this)} puntuacion={this.state.puntosTotales}></Marcador>
                  </td>


                </tr>
                <tr>
                  <td>
                    <Marcador texto="Compuestos Creados" puntuacion={this.state.compuestosCreados.length} />
                  </td>

                </tr>
              </tbody>

            </table>

          </div>

          <NotificacicionUsuario texto={this.state.notficacion} tipo={this.state.buenaNotificacion} ></NotificacicionUsuario>

          <br /><br />
          <table className="banca">

            <tbody>
              <tr>
                <td>
                  <div className="filaElementos">

                    <ElementoReact
                      objeto={this.state.arrayObjeto[0]}
                    ></ElementoReact>

                    <ElementoReact
                      objeto={this.state.arrayObjeto[2]}
                    ></ElementoReact>

                    <ElementoReact
                      objeto={this.state.arrayObjeto[4]}
                    ></ElementoReact>

                    <ElementoReact
                      objeto={this.state.arrayObjeto[6]}
                    ></ElementoReact>

                  </div>

                </td>
                <td width="30%" className="banca" colSpan="2">

                  <div className="banca">

                    <PilaRobar jugando={this.state.juegoEnMarcha} terminarJuego={this.terminar.bind(this)} robarUnaCarta={this.robarCarta.bind(this)} restaurar={this.devolverAlEstadoOriginal.bind(this)} anyadirAlEstadoCartaRobada={this.anyadirCartaRobado.bind(this)}  ></PilaRobar>

                  </div>
                </td>
              </tr>

              <tr>

                <td>
                  <div className="filaElementos">

                    <ElementoReact
                      objeto={this.state.arrayObjeto[1]}
                    ></ElementoReact>

                    <ElementoReact
                      objeto={this.state.arrayObjeto[3]}
                    ></ElementoReact>

                    <ElementoReact
                      objeto={this.state.arrayObjeto[5]}
                    ></ElementoReact>

                    <ElementoReact
                      objeto={this.state.arrayObjeto[7]}
                    ></ElementoReact>

                  </div>

                </td>
                {/* Botón de empezar o pausar */}
                <td className="Panel_Control">

                  <button id={idBoton} className="Boton_Normal Boton_Play_Pause" onClick={this.pausarOContinuar.bind(this)}>{this.state.textoBotonControl}</button>

                  <br></br>

                  {botonAcabar}
                </td>

              </tr>


            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default App;
