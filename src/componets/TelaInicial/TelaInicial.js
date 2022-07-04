import { useContext } from "react";
import TokenContext from "../../Context/TokenContext";

import React from "react";
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
import styled from "styled-components"

import Transacao from "./Transacao";

import home from "../../img/Vector.png"
import entrada from "../../img/entrada.png"
import saida from "../../img/saida.png"



export default function TelaInicial(){

    const navigate = useNavigate()
    const {token, name,balance} = useContext(TokenContext)
    
    
    const [arrayTransacoes, setArrayTransacoes] = React.useState(null)
    const [arraySaidas, setArraySaidas ]= React.useState(null)
    const [arrayEntradas, setArrayEntradas] = React.useState(null)
    const [totalSaida, setTotalSaida] = React.useState(0)
    const [totalEntrada, setTotalEntrada] = React.useState(0)

   


    //requisicao get no axios
    React.useEffect(()=>{
        const config ={
            headers:{
                Authorization: `Bearer ${token}`
            }
        }

        const promisse = axios.get("https://mywalle.herokuapp.com/fluxoCaixa",config)


        promisse.then(response=>{
            console.log(response.data)

            const saida = response.data.filter(el=>el.type==='saida')
            setArraySaidas(saida)

            const entrada = response.data.filter(el=>el.type==='entrada')
            setArrayEntradas(entrada)

            setArrayTransacoes(response.data)

        })

        promisse.catch(err=>console.log(err))


    },[arrayTransacoes])



    function exibirTransacoes(){
        if(arrayTransacoes!=null){
            return(
                <>
                    {arrayTransacoes.map((el, index)=> <Transacao key={index} descricao={el.descricao} time={el.time} type={el.type} valor={el.valor} />).reverse() }
                </>
                
            )
        }
        else{
            return(
                <span>Sem Movimentações...</span>
            )
        }
    }
    

    
    
   
    return(
        <Container>

            <Header>
                <p>Olá, {name}</p>
                <img onClick={()=>navigate('/')}  src={home} />
            </Header>
            
            <AreaInfos>

                <AreaTransacoes>
                    {exibirTransacoes()}
                </AreaTransacoes>
                

                <Saldo>
                <span>Saldo</span>
                <TotalSaldo balance ={balance}>{balance}</TotalSaldo>
                </Saldo>

            </AreaInfos>

            <Buttons>

                <Button onClick={()=>navigate('/entrada')}>
                    <img src={entrada}/>
                    <p>Nova entrada</p>
                </Button>
                

                <Button onClick={()=>navigate('/saida')}>
                    
                    <img src={saida}/>
                    <p>Nova saída</p>
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
    p{
        font-family: 'Raleway', sans-serif;
        font-weight: 600;
        color: #fff;
    }

`

const Header = styled.div`
    width: 326px;
    display: flex;
    justify-content: space-between;
    margin: 8px;

`

const AreaInfos = styled.div`
    width: 326px;
    height:70vh;
    background-color: #FFFFFF;
    margin: 5px auto;
    border-radius: 5px;
    position: relative;
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 326px;
    height: 120px;
    
`

const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding: 6px;
    width: 156px;
    height: 115px;
    background-color: #A328D6;
    border-radius: 5px;

    

`


const Saldo = styled.div`
    width: 100%;
    height: 20px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    
    span{
        font-weight: 700;
        margin: 0 5px;
        font-family: 'Raleway', sans-serif;
    }
`

const TotalSaldo=styled.span`
color: ${props=>props.balance>0?'#03AC00':'#C70000'};

`

const AreaTransacoes = styled.div`
    height: 90%;
    overflow-y: scroll;
`   