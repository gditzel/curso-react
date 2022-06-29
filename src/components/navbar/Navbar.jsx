import React from "react";
import logo from "../../assets/images/logo.png";
import "./Navbar.scss";

export function Navbar() {
  return (
    <div>
      <header>
        <nav
          class="navbar primaryNavigation navbar-expand-lg navbar-light fixed-top"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <div class="container-fluid mx-5">
            <a href="/">
              <img
                class="navbar__logo"
                src={logo}
                alt="Logo"
                height="100px"
                width="100px"
              />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0 mx-auto">
                <li class="nav-item mx-5">
                  <a class="nav-link active" aria-current="page" href="/">
                    Inicio
                  </a>
                </li>
                <li class="nav-item mx-5">
                  <a class="nav-link" href="./contacto.html">
                    Contacto
                  </a>
                </li>

                <li class="nav-item mx-5">
                  <a class="nav-link" href="#destinos">
                    Destinos
                  </a>
                </li>

                <li class="nav-item mx-5">
                  <a class="nav-link" href="#hoteles">
                    Hoteles
                  </a>
                </li>
              </ul>
              <form class="d-flex formulario">
                <input
                  class="form-control me-2"
                  type="search"
                  id="search"
                  placeholder="Busca tu destino"
                  aria-label="Search"
                />
                <button class="btn btn-success" type="submit" id="btn">
                  Buscar
                </button>
              </form>
              <li class="marker mx-5 list-unstyled">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 
                                    0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    />
                  </svg>
                </button>
              </li>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
