import styled from "styled-components";
import { theme } from "../../styles/variaveis";

export const Aside = styled.aside `
  padding: 8px;
  background-color:${theme.colors.neonPurple};
  


`
export const Filtros = styled.div`
  display: inline-flex;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
  background-color: transparent;

`

export const CorDaDiv = styled.div`
background-color:${theme.colors.neonPurple} ;
text-align: center;
`



