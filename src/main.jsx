
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import imagen1 from './assets/img/entrepiso.jpg';
//import imagen2 from './assets/img/hangar.jpg';
import fotoJuan from './assets/img/dario.jpg';
import fotoAna from './assets/img/lucianolugani.jpg';


const proyecto = {
    titulo:'Proyeto Robotica',
    nombre: 'Iluminacion inteligente segun lumen del ambiente',
    descripcion: 'Nuestro proyecto sirve para iluminar ambientes segun la luz del ambiente manteniendo siempre los mismos lumems seteados.',
    imagenes: [
      imagen1,
      
    ],
    equipo: [
      {
        nombre: 'Juan Pérez',
        rol: 'Backend',
        foto: fotoJuan
      },
      {
        nombre: 'LucianoLugani',
        rol: 'Frontend ',
        foto: fotoAna
      }
    ],
    testimonios: [ // solo para grupo de 4
      {
        nombre: 'Carlos López',
        comentario: 'El proyecto es innovador y muy útil.',
        foto: fotoAna
      },
      {
        nombre: 'Cesar Gandia',
        comentario: 'Me encantó participar en este proyecto.',
        foto: fotoAna
      }
    ],
    comentarios: [
      { id: '1', username: 'María García', comment: 'Este proyecto es impresionante.' },
      { id: '2', username: 'Anónimo', comment: 'Me gusta la idea, pero ¿cómo manejan la eficiencia energética?' }
    ],
  };

ReactDOM.createRoot(document.getElementById('root')).render(

    <App proyecto={proyecto}/>
 
)
