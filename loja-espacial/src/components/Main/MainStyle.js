import styled from "styled-components"

export const Container = styled.div`
width: 75vw;
height: 70vh;
display: flex;
float: left;
flex-direction: column;
.container{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
`

export const SideBar = styled.div`
float: left;
display: flex;
flex-direction: column;
width: 10vw;
height: 75vh;
`

export const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 20px;
    border: 1px solid;
    height: 32vh;
    width: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;   
    div:first-child{
        display: flex;
        align-items: center;
        justify-content: center;  
        
        img{
            height: 18vh;
            width: 100vw;
            max-width: 100%;
            border-radius: 20px;
    
        }
    }
    div:last-child{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    
    }
    
    :hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`
export const BoxCard = styled.div`
display: flex;
width: 70vw;
height: 75vh;
align-items: center;
justify-content: center;
gap: 1vw;
flex-wrap: wrap;
`
export const LateralCarrinho = styled.div`
display: flex;
width: 10vw;
height: 75vh;
flex-flow: column;
`