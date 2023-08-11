function NavBar() {
  const items = [
    "Home",
    "Portfolio",
    "Projects",
    "Services",
    "About",
    "Contacts",
  ];

  items.map((item) => <a>{item}</a>);

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="nav justify-content-end navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="nav nav-pills">
            <a className="btn btn-outline-info" href="#services">
              Services
            </a>
            <a className="btn btn-outline-info" href="#works">
              Works
            </a>
            <a className="btn btn-outline-info" href="#contacts">
              Contacts
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
