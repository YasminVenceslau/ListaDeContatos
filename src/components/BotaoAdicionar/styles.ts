import { Link } from "react-router-dom";

import styled from "styled-components";
import { theme } from "../../styles/variaveis";

export const Circulo = styled(Link)`
  border-radius: 50%;
  height: 64px;
  width: 64px;
  background-color: ${theme.colors.neonOrange};
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
  color: aliceblue;
  transition: background-color 0.3s ease;

  &:hover {
    background-color:rgb(213, 196, 221);
  }

`
