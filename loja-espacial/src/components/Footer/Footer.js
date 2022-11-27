import github from "../../img/github.png"
import linkedin from "../../img/linkedin.png"

function Footer() {
    return (
    <div>
      <p>Desenvolvido por Isabelle Pimentel</p>
      <div>
      <a href="https://github.com/IsabellePimentel" target="_blank"><img src={github} alt="icone-github"/></a>
      <a href="https://www.linkedin.com/in/isabellecpimentel/" target="_blank"><img src={linkedin} alt="icone-linkedin"/></a>
      </div>
      </div>
    );
  }
  
  export default Footer;
