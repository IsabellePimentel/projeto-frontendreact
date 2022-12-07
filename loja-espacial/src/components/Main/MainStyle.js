import styled from "styled-components"

export const Container = styled.div`
    width: 70vw;
    height: 75vh;
    display: flex;
    flex-direction: column;
    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const SideBar = styled.div`
    float: left;
    width: 10vw;
    height: 75vh;
`

export const Card = styled.div`
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
        }
    }
    div:last-child{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    :hover{
        border: 2px solid;
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
