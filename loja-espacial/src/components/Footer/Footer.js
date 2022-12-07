import github from "../../img/github.png"
import linkedin from "../../img/linkedin.png"
import { MainFooter } from "./FooterStyle";

function Footer() {
    return (
    <MainFooter>
      <p>Desenvolvido por Isabelle Pimentel</p>
      <div>
      <a href="https://github.com/IsabellePimentel" target="_blank"><img src={github} alt="icone-github"/></a>
      <a href="https://www.linkedin.com/in/isabellecpimentel/" target="_blank"><img src={linkedin} alt="icone-linkedin"/></a>
      </div>
      </MainFooter>
    );
  }
  
  export default Footer;
