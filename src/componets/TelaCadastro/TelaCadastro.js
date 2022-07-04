import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function TelaCadastro(){
    
    const navigate = useNavigate();

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [passwordConfirm, setPasswordConfirm] = React.useState("")

    const user = {
        name: name,
        email:email,
        password:password,
        passwordConfirm:passwordConfirm
    }

    function LoginUser(event){
        event.preventDefault();
        console.log(user)
        const promisse = axios.post("https://mywalle.herokuapp.com/cadastrar", user)
        promisse.then(createUserSucess)
        promisse.catch(createUserFail)
    }

    function createUserSucess(response){
        navigate("/")
    }

    function createUserFail(response){
        alert('Não foi possivel criar o usuraio ')
    }


    return(
        <Container>
            
        <Logo>MyWallet</Logo>

        <form onSubmit={LoginUser}>

            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Digite seu Nome"></input>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Digite seu email"></input>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Digite sua senha"></input>
            <input type="password" value={passwordConfirm} onChange={(e)=> setPasswordConfirm(e.target.value)} placeholder="Confirme a senha"></input>
            
            <button onClick={LoginUser}>Cadastrar</button>
            <Link to="/"><p>Já tem uma conta? Entre agora!</p></Link>
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
        font-size: 20px;
        color: #fff;
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