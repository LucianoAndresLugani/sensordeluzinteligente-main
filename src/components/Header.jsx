const Header = ({titulo}) => {
    return (
      <header className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{titulo}</h1>
        </div>
      </div>
    </header>
    );
  };
export default Header;  