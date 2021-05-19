import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'; // Rotas para navegação

import Header from './components/Herder';// componentes + do cabeçalho
import Footer from './components/Footer'; // componente + css do rodapé

import Login from'./Pages/Login';
import Routes from './Routes'; // importa as rotas de navegação

import './App.css'
function App(){
    
    const[user, setUser] = useState();

    if(user === null){
        return (
            <Login/>
        );
    }
    return (
        <BrowserRouter>
        <>
            <Header/>

            <Routes/>

           


            <Footer/>
        </>
        </BrowserRouter>
    )
} 

export default App