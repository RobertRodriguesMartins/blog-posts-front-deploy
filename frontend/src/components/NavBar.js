import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";

function NavBar() {
  const { pathname } = useLocation();

  useEffect(() => {
    document
      .getElementById(pathname)
      .setAttribute("class", "current-nav-section");
  }, [pathname]);
  return (
    <nav className="nav-menu">
      <Link to="/">
        <h2>Portal Robert News</h2>
      </Link>
      <section className="nav-tools">
        <ul>
          <Link to="/">
            <li id="/">Home</li>
          </Link>
          <Link to="/news/create">
            <li id="/news/create">Criar Noticia</li>
          </Link>
          <li>Minhas Noticias</li>
        </ul>
        <section className="search">
          <label htmlFor="search">
            <BsSearch />
          </label>
          <input
            id="search"
            type="text"
            placeholder="Buscar noticias..."
          ></input>
        </section>
      </section>
      <section className="mobile-nav-menu">
        <HiDotsVertical className="nav-icon" />
      </section>
    </nav>
  );
}

export default NavBar;
