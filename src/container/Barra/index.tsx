import { useDispatch, useSelector } from "react-redux"
import FiltroCard from "../../components/FiltroCards"
import type { RootReducer } from "../../store"
import { useNavigate } from "react-router-dom"

import { alteraTermo } from "../../store/reducers/filtro"
import { Botao, Campo } from "../../styles"

import * as S from './styles'
import * as enums from '../../Utils/enums/Tarefa'

type Props = {
  mostrarFiltros: boolean
}

const Barra = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector ((state:  RootReducer) => state.filtro)


  return (
    <S.Aside>
      <S.CorDaDiv>
        {mostrarFiltros ? (
          <>
            <Campo type="text"
            placeholder="Buscar"
            value={termo}
            onChange={ (evento) => dispatch(alteraTermo(evento.target.value))}/>
              <S.Filtros>

                <FiltroCard
                  valor={enums.Tipo.Amigos}
                  criterio='Tipo'
                  legenda='Amigos'
                />
                <FiltroCard
                  valor={enums.Tipo.Família}
                  criterio='Tipo'
                  legenda='Família'
                />
                <FiltroCard
                  valor={enums.Tipo.Trabalho}
                  criterio='Tipo'
                  legenda='Trabalho'
                />
                <FiltroCard
                  valor={enums.Status.Sim}
                  criterio='Status'
                  legenda='Favoritos'
                />
                <FiltroCard
                  valor={enums.Tipo.Amigos}
                  criterio='Todas'
                  legenda='Todas'
                />
              </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate("/")}> Voltar a lista de contatos</Botao>
        )}
      </S.CorDaDiv>
    </S.Aside>
  )
}
export default Barra
