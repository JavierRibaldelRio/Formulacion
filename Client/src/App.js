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


import { tiempoNotificacionSegundos } from './palabrasClaves';
import TablaRecords from './TablaRecords';



var React = require('react');   //Activa REACt

class App extends React.Component {
  constructor(props) {

    super(props);

    //Define las propiedades
    this.state = {
      arrayObjeto: [...window.$cartasDisponibles], puntosTotales: 0,
      notficacion: undefined, buenaNotificacion: true, juegoAcabado: false,
      juegoEnMarcha: false, textoBotonControl: "Empezar", compuestosCreados: [],
      api: undefined,

      todosLosRecords: undefined,   //Almacena todos los records que han sido desacargados desde la api

      nombreUsuario: undefined,       //Almacena el nnomvbre del usuario

      mejorRecord: undefined,     //Almacena el mejor record

      puntuacionGuardada: false     //Almacena si la puntuación ha sido guardada
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
    window.$baraja.splice(0, 1);

    this.setState({ arrayObjeto: [...window.$cartasDisponibles].concat(window.$baraja[0]) });

    //Dice que carta robar usada es igual a falso
    window.$cartaRobarUsada = false;

    //Definimos cual es la carta robada

    window.$cartaRobada = window.$baraja[0]

    //Devolvemos baraja [0]
    return window.$baraja[0];
  }

  //Edita el estado conforme el imput y lo devuelve a configuración origianl
  notificar(nuevaNotificacion, bien) {

    //Añade al estado la notificación y si es buena o mal
    this.setState({ notficacion: nuevaNotificacion, buenaNotificacion: bien });


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

  //Pide los records
  componentDidMount() {
    //API


    fetch("http://localhost:3000/fetchrecords").then(response => response.json()).then((data) => { this.setState({ todosLosRecords: data, mejorRecord: data[0].puntos }); });


  }

  //Se ejecuta al enviar el formulario
  enviarFormulario(e) {
    e.preventDefault();

    let nickNuevoRecord = this.state.nombreUsuario;

    if (comprobarSiCoinciden(this.state.todosLosRecords) === true) {

      this.notificar("Este nombre ya esta en uso", false);
    } else if (this.state.puntuacionGuardada === false) {

      var puntos = this.state.puntosTotales;

      var nombre = this.state.nombreUsuario;

      let compuestos = this.state.compuestosCreados.length;

      var url = `http://localhost:3000/comprobar/?nick=${nombre}&puntos=${puntos}&compuestos=${compuestos}`;

      fetch(url).then(response => response.json()).then((data) => {
        this.setState({ todosLosRecords: data }); if (data === undefined) {
          alert("Se ha producido un error, por favor refresque la página")
        }
      });

      this.notificar("Has entrado en el ranking.", true);

      //Se asegura de que

      this.setState({ puntuacionGuardada: true })


    }

    //Comprueba que los nombres no coinciden


    function comprobarSiCoinciden(arr) {
      for (var i = 0; i < arr.length; i++) {

        if (nickNuevoRecord === arr[i].nick) {

          return true;


        }

      }
    }
  }

  //Lo que devolvera el componente APP
  render() {
    //Sí el juego ha acabdo
    if (this.state.juegoAcabado === true) {

      var aMostrar = undefined;    //almacena si ha habiado un nuevo record

      var mostrarTabla = <p className="Mensaje_Error">Se a producido un error, por favor refresque la página</p>;  //Alamacenará la tabla en caso de que se muestre

      var h1CompuestosCreados = <h1>Lista de Compuestos Generados</h1>;

      //Si se han creado 0 compuestos
      if (this.state.compuestosCreados.length === 0) {

        h1CompuestosCreados = undefined;  //Lo hace indefinido

      }

      //Se ocupa de ver si entra en el podium

      //Comprueba que se han obtenido los datos en forma de arrya
      if (this.state.todosLosRecords !== undefined) {

        //renderiza la opción  de guardar nombre
        if (this.state.puntosTotales > this.state.todosLosRecords[this.state.todosLosRecords.length - 1].puntos) {

          aMostrar =
            <form id="Formulario_Record" onSubmit={this.enviarFormulario.bind(this)}>
              Inserte su nombre para guardar su puntuación:

              <input type="name" pattern="[A-Za-z0-9_-]{4,10}" title="Solo letras y números" minLength="4" maxLength="10" placeholder="SuNombre" disabled={this.state.puntuacionGuardada} onChange={(e) => { this.setState({ nombreUsuario: e.target.value.trim() }); }} required></input>

              <br></br>

              <hr></hr>

              <button className="Boton_Normal" type="submit" disabled={this.state.puntuacionGuardada}>Guardar Puntuación</button>

              <br />


            </form>;

        }

        //Añade la tabla ha la renderización

        mostrarTabla = <TablaRecords records={this.state.todosLosRecords} />;

      }



      return (

        <div>
          <div className="Fin_Juego_Div"  >
            <p className="Fin_Juego">EL JUEGO SE HA ACABADO, HAS OBTENIDO UN TOTAL DE {this.state.puntosTotales} PUNTOS, Y FORMULADO {this.state.compuestosCreados.length} COMPUESTOS. </p>
            <br></br>

            {h1CompuestosCreados}


            <ListaCompuestos id="Lista_Compuestos" lista={this.state.compuestosCreados}></ListaCompuestos>



            { //Muestra lo que se a de mostrar
              aMostrar}

            <NotificacicionUsuario id="Notificacion_Final" texto={this.state.notficacion} tipo={this.state.buenaNotificacion} />

            <hr />


            <h1>Ranking</h1>

            {mostrarTabla}

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

                <tr>
                  <td>
                    <Marcador texto="Record" puntuacion={this.state.mejorRecord} />
                  </td>

                </tr>
              </tbody>

            </table>

          </div>

          <div id="Notificacion_Compuesto">

            <NotificacicionUsuario texto={this.state.notficacion} tipo={this.state.buenaNotificacion} ></NotificacicionUsuario>
          </div>

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
