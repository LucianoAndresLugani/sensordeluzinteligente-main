const MainSection = ({ proyecto }) => {
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">{proyecto.nombre}</h2>
          <p className="content">{proyecto.descripcion}</p>
          <div className="columns is-multiline">
            {proyecto.imagenes.map((imagen, index) => (
              <div className="column is-one-third" key={index}>
                <figure className="image">
                  <img src={imagen} alt={`Imagen ${index + 1}`} />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default MainSection;