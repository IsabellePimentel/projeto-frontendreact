import { SideBar } from "./MainStyle"

function Filtro(props) {

    const handleChangeNome = (event)=>{
        props.setPesquisa(event.target.value)
        console.log(event.target.value)
    }
   
    const handleChangeMax = (event)=>{
        props.setMaximo(event.target.value)
        console.log(event.target.value)
    }

    const handleChangeMin = (event)=>{
        props.setMinimo(event.target.value)
        console.log(event.target.value)
    }

    return (
        <SideBar>
        <h2>Filtros:</h2>   
        <p>Nome:</p>
        <input type="text"  value={props.pesquisa} onChange={handleChangeNome} />
        <p>Preço:</p>
        <p>Max:</p>
        <input type="number" value={props.maximo} onChange={handleChangeMax} step="500" />
        <p>Min:</p>
        <input type="number" value={props.minimo} onChange={handleChangeMin}  step="500" />
        </SideBar>
    );

}

export default Filtro