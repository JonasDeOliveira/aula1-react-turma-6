import React from "react";
import Contador from "./components/Contator";
// import Primeiro from './components/Primeiro'
// import CompPadrao, { Component1, Component2 } from './components/Multi'
// import Estilos from './components/Estilos'
// import MinMax from "./components/MinMax";
// import Titulo from './components/Titulo'
// import Button from "./components/Button/Button";

function App() {
  return (
    <>
    <Contador inicial={0} passo={5}/>
    <Contador inicial={100} passo={10}/>
      {/* <Button type="primary" text="Cadastrar" acao="cadastrar"/>  
      <Button type="secundary" text="Voltar" acao="voltar"/>       */}
      {/* <Titulo principal="Olá" secundario="tudo bem"/>
      <Titulo principal="Teste"/>
      <Titulo principal="Teste de estilo"/> */}
      {/* <MinMax min="2" max="10"/>
      <MinMax min={4} max={15}/> */}
      {/* <Estilos/>
      <CompPadrao/>
      <Component1/>
      <Component2/>
      <Primeiro/> */}
    </>
  
  )
}

export default App;
