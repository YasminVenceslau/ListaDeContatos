import styled from "styled-components";

type Props = {
  ativaCor: boolean
}

export const Card = styled.div<Props>`
  padding: 2px;
  border-radius: 8px;
  cursor: pointer;
  background-color:${props => props.ativaCor ? '#FF5F1F' : '#0D0D0D' };
  color: ${props => props.ativaCor ? '#fff' : '#FF00FF' };

`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;

`

export const Label = styled.span`
  font-size: 14px;

`
