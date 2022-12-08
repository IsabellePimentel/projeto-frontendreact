import Filtro from "./Filtro"
import { useState, useEffect } from 'react'
import { Container, Card, BoxCard, TODO } from "./MainStyle"
import Carrinho from "./Carrinho"

function Main(props) {

    const produtos = [{
        id: 1,
        nome: "Mercúrio",
        preco: 11000,
        imagem: "https://images.unsplash.com/photo-1640270772837-48fda64883a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    }, {
        id: 2,
        nome: "Venus",
        preco: 10000,
        imagem: "https://images.unsplash.com/photo-1630693912525-7a833b62c81f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80",

    }, {
        id: 3,
        nome: "Marte",
        preco: 9500,
        imagem: "https://images.unsplash.com/photo-1630694093867-4b947d812bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80",
    }, {
        id: 4,
        nome: "Júpter",
        preco: 10500,
        imagem: "https://images.unsplash.com/photo-1630839437035-dac17da580d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1615&q=80",
    }, {
        id: 5,
        nome: "Saturno",
        preco: 12500,
        imagem: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    }, {
        id: 6,
        nome: "Urano",
        preco: 14000,
        imagem: "https://images.unsplash.com/photo-1614732484003-ef9881555dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    }, {
        id: 7,
        nome: "Netuno",
        preco: 15000,
        imagem: "https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    }, {
        id: 8,
        nome: "Lua",
        preco: 6000,
        imagem: "https://images.unsplash.com/photo-1601597893939-708e7ee0716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    }]

    const [pesquisa, setPesquisa] = useState("")
    const [valorMinimo, setValorMinimo] = useState("")
    const [valorMaximo, setValorMaximo] = useState("")
    const [ordem, setOrdem] = useState("Maior")
    const [carrinho, setCarrinho] = useState([])
    const [cesta, setCesta] = useState([])

    const onChangeOrdem = (event) => {
        setOrdem(event.target.value)
    }

    const produtosList = produtos
        .filter((produto) => produto.nome.toUpperCase().includes(pesquisa.toUpperCase()))
        .filter((produto) => { return valorMinimo ? produto.preco >= valorMinimo : produto })
        .filter((produto) => { return valorMaximo ? produto.preco <= valorMaximo : produto })
        .sort((a, b) => {
            switch (ordem) {
                case "Maior":
                    if (a.preco < b.preco) {
                        return 1
                    } else {
                        return -1
                    }
                case "Menor":
                    if (a.preco < b.preco) {
                        return -1
                    } else {
                        return 1
                    }
            }
        })


    const onChangeCarrinho = (event) => {
        setCarrinho(event.target.value)
    }

    
    const compraProduto = (produto) => {

        console.log(produto)
        const novoCarrinho = [...carrinho]
        const produtoAdicionado = produto
        const produtoExistente = novoCarrinho.find((produto) => {
            return produto.id === produtoAdicionado.id
        })
        if (produtoExistente) {
            produtoExistente.quantidade++
            produtoExistente.precototal = produtoExistente.quantidade * produtoExistente.preco
        } else {
            novoCarrinho.push({ ...produtoAdicionado, quantidade: 1, precototal: produtoAdicionado.preco })
        }
        setCarrinho(novoCarrinho)
        console.log(carrinho)
    }


    return (

        <>
            <Filtro setPesquisa={setPesquisa}
                setMinimo={setValorMinimo}
                setMaximo={setValorMaximo}
            />

            <Container>
                <div className="container">
                    <div><p>Quantidade de produtos: {produtosList.length}</p></div>
                    <div>
                        <select value={ordem} onChange={onChangeOrdem} className="boxcentral-topo-select">
                            <option value="Maior">Maior preço</option>
                            <option value="Menor">Menor preço</option>
                        </select>
                    </div>
                </div>


                <BoxCard>
                    {produtosList.map((produto, index) => {
                        return (
                            <Card key={index}>
                                <div>
                                    <img src={produto.imagem} />
                                </div>
                                <div>
                                    <h3>{produto.nome}</h3><br />
                                    <h4>R$ {produto.preco.toFixed(2)}</h4>
                                    <button onClick={() => compraProduto(produto)} onChange={onChangeCarrinho}>Comprar</button>
                                </div>
                            </Card>
                        )
                    })}
                </BoxCard>



            </Container>


            <Carrinho
                cesta={carrinho}
                setCesta={setCesta}
                setCarrinho={setCarrinho}

            />

        </>

    );

}
export default Main;
