import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react";

import TokenContext from "./Context/TokenContext";

import TelaLogin from "./componets/TelaLogin/TelaLogin";
import TelaCadastro from "./componets/TelaCadastro/TelaCadastro"
import TelaInicial from "./componets/TelaInicial/TelaInicial";
import TelaAddEntrada from "./componets/TelaAddEntrada/TelaAddEntrada"
import TelaAddSaida from "./componets/TelaAddSaida/TelaAddSaida"



export default function AppRoutes(){

    const [token, setToken] = React.useState("");
    const [name, setName] = React.useState("")
    const [balance, setBalance] = React.useState("")

    return(
    
    <TokenContext.Provider value={{token, setToken, name, setName, balance, setBalance}}>
         <BrowserRouter>
            <Routes>

                <Route path="/" element={<TelaLogin/>}/>
                <Route path="/cadastro" element={<TelaCadastro/>}/>
                <Route path="/inicial" element={<TelaInicial/>}/>
                <Route path="/entrada" element={<TelaAddEntrada/>}/>
                <Route path="/saida" element={<TelaAddSaida/>}/>
               
               
            </Routes>
        
        </BrowserRouter>
    </TokenContext.Provider>
       
        
    )


}


