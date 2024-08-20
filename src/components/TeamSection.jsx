const TeamSection = ({ equipo }) => {
    return (
      <section className="section">
      <div className="container">
        <h2 className="title">Equipo</h2>
        <div className="columns is-multiline">
          {equipo.map((miembro, index) => (
            <div className="column is-one-third" key={index}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={miembro.foto} alt={miembro.nombre} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{miembro.nombre}</p>
                      <p className="subtitle is-6">{miembro.rol}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
  };

  export default TeamSection;