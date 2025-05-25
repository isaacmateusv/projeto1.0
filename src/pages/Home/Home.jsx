import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">HackPool</div>
        <ul className="nav-menu">
          <li>Dashboard</li>
          <li>Usuários</li>
          <li>Configurações</li>
          <li>Sair</li>
        </ul>
      </nav>

      <main className="main-content">
        <h1>Bem-vindo, Isaac 👾</h1>
        <p>Aqui é a sua área principal para gerenciar tudo.</p>
      </main>
    </div>
  );
};

export default Home;
