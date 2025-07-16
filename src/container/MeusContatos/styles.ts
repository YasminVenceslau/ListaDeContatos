import styled from "styled-components";
import variaveis, { theme } from "../../styles/variaveis";


export const Forma = styled.form `
 
  
  font-weight: bold;
  font-size: 14px;
  color: ${variaveis.branco};

  textarea {
    resize: none;
    margin: 16px 0;

  }

  p{
    color: ${theme.colors.neonPink};
    
  }
`


export const Opcoes = styled.div `
  margin-bottom: 16px;

    p {
      margin-bottom: 6px;
    }

    label {
      margin-right: 6px;
    }
`

export const Opcao = styled.div `
  display: inline;
  text-transform: capitalize;
`

