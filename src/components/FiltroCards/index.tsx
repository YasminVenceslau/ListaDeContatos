import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'

import * as enums from '../../Utils/enums/Tarefa'
import * as S from './styles'
import type { RootReducer } from '../../store'


export type Props  = {
  legenda: string
  criterio: 'Tipo' | 'Status' | 'Todas'
  valor?: enums.Tipo | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {

  const dispatch = useDispatch()
 

  const { filtro, contatos } = useSelector ( (state: RootReducer) => state)

  const verificaEstadoAtivoCor = () => {
    if (criterio === 'Todas') {
    return filtro.criterio === 'Todas'
  }

  const mesmoCriterio = filtro.criterio === criterio
  const mesmoValor = filtro.valor === valor

  return mesmoCriterio && mesmoValor
}

  const contarTarefas = () => {
    if (criterio === 'Todas')
      return contatos.itens.length

    if (criterio === 'Tipo') {
      return contatos.itens.filter (item => item.tipo === valor).length
    }
    if (criterio === 'Status') {
      return contatos.itens.filter (item => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro ({
        criterio,
        valor
    }))
  }

  const ativo = verificaEstadoAtivoCor()
  const contador = contarTarefas()

  return (
      <S.Card ativaCor={ativo} onClick={filtrar}>
        <S.Contador>{contador}</S.Contador>
        <S.Label>{legenda}</S.Label>
      </S.Card>
  )

  
}

export default FiltroCard
