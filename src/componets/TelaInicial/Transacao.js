import styled from "styled-components"

export default function Transacao({valor, type, time, descricao}){
    return(
        
        <Container>
        <div>
            <Data>{time}</Data>
            <Descricao>{descricao}</Descricao>
        </div>
        
        <div>
            <Valor formatacao={type} > {valor} </Valor>
        </div>

        

    
        

        </Container>
       
        
       
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-family: 'Raleway', sans-serif;;
    font-weight: 500;
    position: relative;


    div{
        display: flex;
        margin: 8px 10px;
        
    }

`

const Descricao =styled.h6`

    margin-left: 10px;
`

const Data = styled.h6` 

    color:#C6C6C6;
`


const Valor = styled.h6`

    color: ${props=>props.formatacao==='saida'?'#C70000':'#03AC00'};
`


