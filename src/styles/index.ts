import styled, { createGlobalStyle } from "styled-components";
import variaveis, { theme } from "./variaveis";

const  EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    
    list-style: none;
    
    body{
      background-color:${theme.colors.backgroundDark};
    }
  }
`

export const Container = styled.div`
  display: inline ;
  padding-bottom: 16px;
  color:${theme.colors.neonPink};
`

export const MainContainer = styled.main`
  padding: 0 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  
  ul{
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content:center;
    
    li{
      padding-left: 8px;

    }
  }
`

export const Titulo  = styled.h2 `
  display: block;
  margin: 40px 0;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
`;

export const Campo = styled.input`
padding: 8px;
background-color:${variaveis.branco};
border-radius: 8px;
font-weight: bold;
color: ${theme.colors.neonPurple};
width:30%;
border: 1px solid${theme.colors.neonPurple};
margin-bottom: 16px;
margin-right:16px;


  &::placeholder {
    color:${theme.colors.neonPurple};
  }

`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color:${theme.colors.neonBlue};
  border-radius: 8px;
  margin-right: 8px;
  color: ${variaveis.branco};

`
export const BotaoSalvar = styled(Botao)`
  background-color: ${theme.colors.neonGreen};
`

export default EstiloGlobal
