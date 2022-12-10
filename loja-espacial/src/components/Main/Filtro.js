import { SideBar } from "./MainStyle"

function Filtro(props) {

    const handleChangeNome = (event) => {
        props.setNome(event.target.value)
        console.log(event.target.value)
    }

    const handleChangeMax = (event) => {
        props.setMaximo(event.target.value)
        console.log(event.target.value)
    }

    const handleChangeMin = (event) => {
        props.setMinimo(event.target.value)
        console.log(event.target.value)
    }

    const limparCampos = () => {
        const nome = document.getElementById("nome").value = "";
        const max = document.getElementById("max").value = "";
        const min = document.getElementById("min").value = "";
        props.setNome(nome);
        props.setMaximo(max);
        props.setMinimo(min)
    }

    return (
        <SideBar>
            <h2>Filtros:</h2>
            <p>Nome:</p>
            <input type="text" id="nome" value={props.nome} onChange={handleChangeNome} />
            <p>Preço:</p>
            <p>Max:</p>
            <input type="number" id="max" value={props.maximo} onChange={handleChangeMax} step="500" min="0.00" max="15000" />
            <p>Min:</p>
            <input type="number" id="min" value={props.minimo} onChange={handleChangeMin} step="500" min="0.00" max="15000" />

            <button onClick={() => limparCampos()} >Limpar</button>

        </SideBar>
    );

}

export default Filtro