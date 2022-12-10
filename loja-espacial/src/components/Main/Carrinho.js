import { SideBarCarrinho } from "./MainStyle"

function Carrinho(props) {

    let totalCarrinho = 0

    const atualizaCarrinho = () => {
        for (let i = 0; i < props.itens.length; i++) {
            totalCarrinho += props.itens[i].precototal
        }
        return
    }

    const removeItem = (produto, index) => {
        console.log(produto)

        const produtoExistente = props.itens.find((p) => {
            return p.id === produto.id
        })

        if (produtoExistente != null) {
            produtoExistente.quantidade--
            produtoExistente.precototal = produtoExistente.quantidade * produtoExistente.preco
        }

        if (produtoExistente.quantidade < 1) {
            props.setItens(props.itens.splice(index, 1))
        } else {
            props.setItens(props.itens.filter((item) => item))
        }

        const listaStringCarrinho = JSON.stringify(props.itens)
        localStorage.setItem("carrinho", listaStringCarrinho)

        console.log(props.itens)

    }

    atualizaCarrinho()

    return (
        <>
            <SideBarCarrinho>
                <h2>Carrinho:</h2>
                <br />
                {props.itens.map((produto, index) => {
                    return (
                        <div key={index} >
                            <p>
                                <span>{produto.quantidade}x </span>
                                <span>{produto.nome} </span>
                                <span> 
                                    <b>{produto.precototal.toLocaleString('pt-BR', { style: "currency", currency: 'BRL' })}</b>
                                </span>
                            </p>
                            <button onClick={() => removeItem(produto, index)} >Remover</button>
                        </div>
                    )
                })}
                <br />
                <p><b>Valor total: R$ {totalCarrinho.toFixed(2)}</b></p>
            </SideBarCarrinho>
        </>
    )
}

export default Carrinho