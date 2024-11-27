import "../styles/header.css";
import Megafone from "../assets/megafone.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="cabecalho">
      <div className="cabecalho-esquerda">
        <img src={Megafone} alt="Logo" />
        <Link to="/">
          <h1>COMMUNICATION</h1>
        </Link>
      </div>
      <div className="header-button">
        <Link to="/registerEvent">
          <button className="botao-cabecalho">Criar evento</button>
        </Link>
        <Link to="/numeroRegister">
        <button className="botao-cabecalho">Add número</button>
        </Link>
        <Link to="/listagemNumeros">
        <button className="botao-cabecalho">Lista de números</button>
        </Link>
        <Link to="/listagemEvents">
          <button className="botao-cabecalho">Lista de eventos</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
