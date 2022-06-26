import React from "react";
import { BsSearch } from 'react-icons/bs';

function NavBar() {
  return (
    <nav className="nav-menu">
      <h2>Portal Robert News</h2>
      <section className="nav-tools">
        <ul>
          <li>Criar Noticia</li>
          <li>Minhas Noticias</li>
        </ul>
        <section className="search">
          <label htmlFor="search">
            <BsSearch />
          </label>
          <input id='search' type='text' placeholder="search a notice" ></input>
        </section>
      </section>
    </nav>
  )
}

export default NavBar;
