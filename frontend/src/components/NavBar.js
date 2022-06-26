import React from "react";
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';

function NavBar() {
  return (
    <nav className="nav-menu">
      <h2>Portal Robert News</h2>
      <section className="nav-tools">
        <ul>
          <Link to="/news/create"><li>Criar Noticia</li></Link>
          <li>Minhas Noticias</li>
        </ul>
        <section className="search">
          <label htmlFor="search">
            <BsSearch />
          </label>
          <input id='search' type='text' placeholder="Buscar noticias..." ></input>
        </section>
      </section>
    </nav>
  )
}

export default NavBar;
