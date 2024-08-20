const TestimonialsSection = ({ testimonios }) => {
    return (
      <section className="section">
      <div className="container">
        <h2 className="title">Testimonios</h2>
        <div className="columns is-multiline">
          {testimonios.map((testimonio, index) => (
            <div className="column is-one-third" key={index}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      {testimonio.foto && (
                        <figure className="image is-48x48">
                          <img src={testimonio.foto} alt={testimonio.nombre} />
                        </figure>
                      )}
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{testimonio.nombre}</p>
                    </div>
                  </div>
                  <div className="content">
                    {testimonio.comentario}
                  </div>
                </div>
              </div>
            </div>
          ))}1
        </div>
      </div>
    </section>
     
    );
  };

  export default TestimonialsSection;