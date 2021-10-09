import React,{Component} from 'react';
import logo from './bannerTec.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Banner1 from './Components/Banner1';
import Body from './Components/Body';
import Banner2 from './Components/Banner2';
import Footer from './Components/Footer'

class App extends Component {
  
  decision=(fecha)=>{
    const mensaje = fecha="8 de Octubre de 2021";
    return mensaje;
  }
  
  botonsito(){
    alert("¿Un Lolsito o que :D?")
  }
  
  render(){
    
    const fecha='8 de Octubre de 2021';
    
    const temas=["Tipos de componentes",
        "Contenedores",
        "Usar más de un componente",
        "Funciones",
        "Props",
        "Prop-Types",
        "DesaultProps"
        ];
    
    const listTemas = temas.map((tema) => <li>{tema}</li>)

    return (
    <div className="App">
      
      <div className='Banner1'>
        <Banner1
         texto="Desarrollo de Aplicaciones para Dispositivos Móviles"
        />
      </div>
      
      <div>
        <header className="Header">
          <img style={{minHeight: '5vh', alignitems: 'center'}} src={logo} className="Logo" alt="logo" />
        </header>
      </div>
      
      <div className="Banner2">
        <Banner2
          text={fecha}
        />
      </div>
      
      <div className="Body">
        <Body
          texto="Práctica 1 - Unidad 2"
          temas={listTemas}
        />
        <Button class="Button" onClick={()=>this.botonsito()}>Dale Starp</Button>
      </div>
      
      <div className="Footer">
        <Footer
          pie={<p>Copyright &copy; Todos los derechos reservados </p>}
        />
      </div>
      
    </div>
  )};
}

export default App;
