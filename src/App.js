import React,{useReducer} from 'react'
import {GeneradorCadena} from '../src/hooks/GeneradorCadena'
import './App.css';
import { MostrarCadena } from './hooks/MostrarCadena';
import { tReducer } from './hooks/tReducer';

function App() {

  const [ { cadena , longitud, resultado }, handleInputChange, reset ] = GeneradorCadena({
    cadena: 0,
    longitud:0,
    resultado:0
});

 const [state, dispatch] = useReducer(tReducer, []);
    




// mandamos los datos
const handleSubmit = (e) => {
  e.preventDefault();
    
  
  // let usados=[];
  // const repetido=(result) => {
  //   var  repe = false; 
  //    for ( var j = 0; j < usados.length; j++ ) 
  //    { 
  //      if (result === usados[j]) 
  //      { repe = true; }
      
  //     } 
  //    return repe; 
  //   }

  function Gentokens(longitud) {
  
    var token           = '';
    var valor       = '0123456789abcdefghijklmnopqrstuvwxyz';
    var longitudToken = valor.length;
    for ( var i = 0; i < longitud; i++ ) {
       token += valor.charAt(Math.floor(Math.random() * longitudToken));
    }
    return token;
  }
  


for(var m =0; m < cadena ; m++){
  const initialState = {
    cadena: cadena,
    longitud: longitud,
    resultado: Gentokens(longitud)
  };

  const action = {
    type: 'add',
    payload: initialState
}

  dispatch( action );
}
 


  
  
}

  return (
    <div className="App">
       <nav>
    <div className="blue nav-wrapper">
      <a href="#" className="">Generador de cadenas</a>

      <ul id="nav-mobile" className="right hide-on-med-and-down">
       
      </ul>
    </div>
  </nav>
  <div className="container">

    <br></br>
  <div class="chip z-depth-5">
    <img src="https://scontent.fcun1-1.fna.fbcdn.net/v/t1.6435-9/93796424_3033369603390043_4770590724523556864_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=174925&_nc_eui2=AeHzCipP3pVCgChiy8RP1bbu5P3MdfiNxOXk_cx1-I3E5X0ToXeGE_niP9WaxmF_8mVCC6zrRKwbnzfIkD15jyvq&_nc_ohc=RaF2YinUgH8AX9PVALN&_nc_ht=scontent.fcun1-1.fna&oh=e840ca9e20d531177e31c54d9d0cbec7&oe=60E55CDA" />
    <a href="https://www.oscarcocom.com" > www.oscarcocom.com</a>
   
  </div>
  <form onSubmit={ handleSubmit }  className="col s12">
      <div className="row">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
       
        <div className="input-field col s6">
          <i className="material-icons prefix">pin</i>
          <input
           type="number"
           name="longitud"
           className="form-control"
           value={longitud}
           onChange={handleInputChange}
           
           ></input>
          <label for="icon_telephone">Longitud</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">expand</i>
          <input 
                    type="number"
                    name="cadena"
                    className="form-control"
                    value={cadena}
                    onChange={handleInputChange}
                />
          <label for="icon_prefix">Cantidad</label>
        </div>
        <button class="z-depth-5 btn waves-effect waves-light" type="submit" name="action">GENERARDOR
    <i class="material-icons right">add</i>
  </button>
      </div>
      <div class="divider"></div>
      
    </form>
    <table>
        <thead>
          <tr>
              <th>RESULTADO</th>
              <th></th>
              <th></th>
          </tr>
        </thead>

        <tbody>
      
        {
            state.map( (todo, i) => (
            
            <MostrarCadena todo={todo} i={i}/>
             
            ))
        } 



          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
            
      </div>
    </div>
  );
}

export default App;
