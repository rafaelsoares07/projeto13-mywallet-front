import { useContext } from "react";
import TokenContext from "../../Context/TokenContext";

import React from "react";
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
import styled from "styled-components"



export default function TelaLogin(){

    const {setToken, setName, setBalance} = useContext(TokenContext)

    const navigate = useNavigate()
    
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const user = {
        email:email,
        password:password
        
    }

    function LoginUser(event){
        event.preventDefault();
        console.log(user)
        const promisse = axios.post("https://mywalle.herokuapp.com/login", user)
        promisse.then(LoginUserSucess)
        promisse.catch(LoginUserFail)
    }

    function LoginUserSucess(response){

        console.log(response.data)
        
        setToken(response.data.sectionExists.token)
        setName(response.data.userExists.name)
        setBalance(response.data.userExists.balance)
        navigate('/inicial')
    }

    function LoginUserFail(){
        alert("Email ou senha não foram encontrados!")
    }

    return(
        <Container>

            
            <Logo>MyWallet</Logo>

                <form onSubmit={LoginUser}>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Digite seu email"></input>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Digite sua senha"></input>
                    <button onClick={LoginUser}>Entrar</button>
                    <Link to="/cadastro"><p>Ainda não tem uma conta? </p></Link>
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
    justify-content: center;
    align-items: center;

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
        border: none;
        width:325px;
        height: 45px;
        background-color: #A328D6;
        border-radius: 5px;
        text-align: center;
    }

    p{
        color: #FFFFFF;
       
    }
    a{
        text-decoration: none;
    }

`
const Logo = styled.p`
    font-size: 32px;
    color: #FFFFFF;
`

