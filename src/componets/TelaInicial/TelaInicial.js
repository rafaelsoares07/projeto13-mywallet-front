import { useContext } from "react";
import TokenContext from "../../Context/TokenContext";

import React from "react";
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
import styled from "styled-components"

import Transacao from "./Transacao";




export default function TelaInicial(){

    const navigate = useNavigate()
    const {token, name} = useContext(TokenContext)
    
    
    const [arrayTransacoes, setArrayTransacoes] = React.useState(null)

    console.log(arrayTransacoes)



    //requisicao get no axios
    React.useEffect(()=>{
        const config ={
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        const promisse = axios.get("http://localhost:5000/fluxoCaixa",config)

        promisse.then(response=>{
            console.log(response.data)
            setArrayTransacoes(response.data)
        })

        promisse.catch(err=>console.log(err))
    },[])



    function exibirTransacoes(){
        if(arrayTransacoes!=null){
            return(
                <>
                    {arrayTransacoes.map((element, index)=> <Transacao key={index} value={element.descricao} />) }
                </>
                
            )
        }
        else{
            return(
                <h1>Voce nao tem transacoes ainda</h1>
            )
        }
    }
    

    
    
   
    return(
        <Container>

            <Header>
                <p>Olá {name}</p>
                <p>do token : {token}</p>
    
            </Header>
            
            <AreaInfos>
            {exibirTransacoes()}
            </AreaInfos>

            <Buttons>

                <Button onClick={()=>navigate('/entrada')}>
                    <p>icone</p>
                    <p>Nova entrada</p>
                </Button>
                

                <Button onClick={()=>navigate('/saida')}>
                    <p>icone</p>
                    <p>Nova saida</p>
                </Button>

            </Buttons>

        </Container>
        
        
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #8C11BE;
    margin: 0 auto;
    width: 375px;
    height: 100vh;
    font-family: 'Saira Stencil One', cursive;

`

const Header = styled.div`
    width: 326px;

`

const AreaInfos = styled.div`
    width: 326px;
    height:70vh;
    background-color: #FFFFFF;
    margin: 0 auto;
    border-radius: 5px;
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 326px;
    height: 120px;
    
`

const Button = styled.div`
    width: 156px;
    height: 115px;
    background-color: #A328D6;
    border-radius: 5px;


`