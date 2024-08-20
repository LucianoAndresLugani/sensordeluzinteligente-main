
import 'bulma/css/bulma.min.css';
import './App.css'
import Header from './components/Header';
import MainSection from './components/MainSection';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import CommentSection from './components/CommentSection';


// Nuevo componente para la caja de comentarios


const App = (props) => {
  const proyecto = props.proyecto;
  return (
    <div>
      <Header titulo={proyecto.titulo}/>
      <MainSection proyecto={proyecto} />
      <TeamSection equipo={proyecto.equipo} />
      {proyecto.testimonios && <TestimonialsSection testimonios={proyecto.testimonios} />} {/* solo para grupo de 4 */}
      <CommentSection initialComments={proyecto.comentarios} /> {/* Comentarios iniciales desde `proyecto` */}
      <Footer />
    </div>
  );
};

export default App;


