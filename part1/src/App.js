
import './App.css';
import TextoEjemplo from './Texto';

const Mensaje = () => {
  
  return(
  <div id='texto'>
    <h1>Estamos trabajandooooh</h1>
    <strong>Hola</strong>
      <p>Un saludo:</p>
      </div>)    
   
}

const Cuerpo = () =>{
  const mensaje = 'xd'
  const a = 33;
  const b = 36;

  return(
    //fragment, no sayuda a devolver sólo lo que queremos sin insertar html
      <>
              {mensaje}
      <br />
      {a+b}
      </>
  )
}

function App() {
  
  return (
    <div className="App">
      <Mensaje />
      <Cuerpo />
      <TextoEjemplo titulo=' Titulo con un prop' messages='Prueba' color='Gray'/>
      <TextoEjemplo titulo=' Intentando hacer un componente reutilizable' color='Blue' />
      <TextoEjemplo messages=' Esto es con un prop' />
    </div>


  );
}

export default App;
