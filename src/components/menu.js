import React from "react";
import Denuncias from "./denuncias";
import { Switch, Route, Link } from "react-router-dom";
import DenunciasDetails from "./denunciaDetails";
import Map from "./map_view";

const Menu = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarRightAlignExample"
              aria-controls="navbarRightAlignExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarRightAlignExample"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/denuncias">
                    Denuncias
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mapa">
                    Mapa
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ayuda">
                    Ayuda
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Switch>
        <Route path="/denuncias/:id">
          <DenunciasDetails />
        </Route>
        <Route path="/denuncias">
          <Denuncias />
        </Route>
        <Route path="/mapa">
          <Map/>
        </Route>
        <Route path="/ayuda">
          <h1>Acerca de</h1>
        </Route>
        <Route path="/" exact>
          <h1>Inicio</h1>
        </Route>
      </Switch>
    </div>
  );
};
export default Menu;
