import { MainHeader } from "./HeaderStyle";
import header from "../../img/header.png"



function Header() {
  return (
    <MainHeader>
      <div className="titulo">
        <div>
          <img src={header} alt="icone-header" />
        </div>
        <h1>Via Láctea</h1>
        <h2>Encontre a viagem dos seus sonhos</h2>
      </div>
    </MainHeader>
  );
}

export default Header;