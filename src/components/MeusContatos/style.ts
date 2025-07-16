import styled from "styled-components";
import { theme } from "../../styles/variaveis";
import { Botao } from "../../styles";




export const Card = styled.div`
  background-color:rgba(253, 247, 247, 0.63);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 32px;
  margin-bottom: 32px;
  border-radius: 8px;

    label{
      background-color: transparent;
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }

`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  background-color: transparent;
  margin-left: 8px;
`
export const TituloTrans = styled.em`
  background-color: transparent;
`



export const Descricao = styled.input`
  color: ${theme.colors.backgroundDark};
  font-size: 12px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  background-color: transparent;
  border: none;
  
`

export const DescricaoTexto = styled.span`
  color: ${theme.colors.backgroundDark};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  background-color: transparent;
  border: none;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid #0000001A;
  padding-top: 16px;
  background-color: transparent;
`


export const BotaoCancelar = styled(Botao)`
  background-color: ${theme.colors.neonRed};
`
export const Linha = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* espaço entre label e input */
  background-color: transparent;
  word-break: break-word;
  overflow-wrap: break-word;

`

export const LinhaForte = styled.samp`
  background-color: transparent;
  font-weight: bold;
  font-size: 16px;
  text-rendering: auto;
   white-space: nowrap;

`

export const EstrelaBotao = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 8px;
  padding: 4px;
  background-color: transparent;

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
`

export const EstrelaLabel = styled.label`
  background-color: transparent;
`
