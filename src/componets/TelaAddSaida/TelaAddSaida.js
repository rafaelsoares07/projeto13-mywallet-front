import React from "react";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TokenContext from "../../Context/TokenContext";


export default function TelaCadastro(){
    
    const navigate = useNavigate();

    const {token, setBalance} = useContext(TokenContext)

    const [valor, setValor] = React.useState('')
    const [descricao, setDescricao] = React.useState('')

    console.log(token)

    
    function RegistrarSaida(event){
        event.preventDefault();

        const config ={
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        const body ={
            valor:valor,
            descricao:descricao,
            type:"saida"
        }
        const promisse  =  axios.post("https://mywalle.herokuapp.com/novaSaida" , body, config)

        promisse.then(response=>{
            
            console.log(response.data)
            setBalance(response.data.balance)
        })

        promisse.catch(error=>console.log(error))

        navigate('/inicial')
    }


    return(
        <Container>
        <p>Nova saída</p>
        <form onSubmit={RegistrarSaida}>

            <input type="text" value={valor} onChange={(e)=> setValor(e.target.value)} placeholder="Digite o valor"></input>
            <input type="text" value={descricao} onChange={(e)=> setDescricao(e.target.value)} placeholder="Digite a descricao"></input>
            <button onClick={RegistrarSaida}>Cadastrar</button>

        </form>
        
        
        </Container>
    )
}




const Container = styled.div`
    background-color: #8C11BE;
    margin: 0 auto;
    width: 375px;
    height: 100vh;
    font-family: 'Saira Stencil One', cursive;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        margin-top: 10px;
        margin-bottom: 10px;
        width: 325px;
        font-size: 26px;
        color: #fff;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input{
        border: none;
        border-radius: 5px;
        margin: 5px;
        width: 325px;
        height: 58px;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        color: #000000;
    }

    button{
        margin-top: 5px;
        border: none;
        width:325px;
        height: 45px;
        background-color: #A328D6;
        border-radius: 5px;
        text-align: center;
        font-size: 20px;
        color: #fff;
    }

`
