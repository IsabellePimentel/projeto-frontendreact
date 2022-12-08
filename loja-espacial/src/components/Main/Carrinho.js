import {LateralCarrinho} from "./MainStyle"

function Carrinho (props){

    let totalCarrinho = 0

    const somaCarrinho = ()=>{
        for (let i = 0;i<props.cesta.length;i++){
            totalCarrinho += props.cesta[i].precototal
        }
        return
    }

    const removeItem = (produto, index)=>{
        console.log(produto)

        const produtoExistente =  props.cesta.find((p)=>{
            return p.id === produto.id 
        })

        if (produtoExistente != null){
            produtoExistente.quantidade--
            produtoExistente.precototal = produtoExistente.quantidade * produtoExistente.preco
          }

          if(produtoExistente.quantidade < 1) {
            props.setCesta(props.cesta.splice(index, 1))
          }else{
            props.setCesta(props.cesta.filter((item) => item))
          }       
       
          console.log(props.cesta)
          
    }

    somaCarrinho()

    return(
        <>
        <LateralCarrinho>
        <h2>Carrinho:</h2>
        <br/>
            {props.cesta.map((produto,index)=>{
            return(
                <div  key={index} >
                <p><span>{produto.quantidade}x </span><span>{produto.nome} </span><span> <b>{produto.precototal.toFixed(2)}</b></span></p>
                <button onClick={()=>removeItem(produto, index)} >Remover</button>
                </div>
            )    
        })}
        <br/>
        <p><b>Valor total: R$ {totalCarrinho.toFixed(2)}</b></p>
        </LateralCarrinho>
        </>
    )
}

export default Carrinho