import { useEffect, useState, type ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'

import * as S from './style'
import type TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'

import * as enums from '../../Utils/enums/Tarefa'
import { Mail, Phone, Star } from 'lucide-react'

type Props = TarefaClass

const MeusContatos = ({
  email: emailOriginal,
  tipo,
  status,
  nome,
  numero: numeroOriginal,
}: Props) => {

  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState<number> (0)

  useEffect(() => {
    if (emailOriginal.length > 0) setEmail(emailOriginal)
    if (numeroOriginal) setNumero(numeroOriginal)
  }, [emailOriginal, numeroOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setNumero(numeroOriginal)
  }


  function alteraStatusTarefaSimples() {
  dispatch(alteraStatus({
    numero,
    finalizado: status !== enums.Status.Sim
  }))
}

  function formatarTelefone(num: number | string): string {
    const str = num.toString().padStart(11, '0')
    const ddd = str.slice(0, 2)
    const parte1 = str.slice(2, 7)
    const parte2 = str.slice(7)
    return `(${ddd}) ${parte1}-${parte2}`
  }

  return (
    <S.Card>
      <label htmlFor={nome}>
        <S.EstrelaBotao onClick={() => alteraStatusTarefaSimples()}>
          {status === enums.Status.Sim ? (
            <S.EstrelaLabel>

              <Star fill="gold" color="gold" />
            </S.EstrelaLabel>
          ) : (
            <Star  color="gray" />
          )}
        </S.EstrelaBotao>
        <S.Titulo>
          {estaEditando && <S.TituloTrans>Editando: </S.TituloTrans>}
          {nome}
        </S.Titulo>
      </label>

      
  <S.Linha>
    <S.LinhaForte><Mail/></S.LinhaForte>
    <S.Descricao
      disabled={!estaEditando}
      type='email'
      value={email}
      onChange={evento => setEmail(evento.target.value)}
    />
  </S.Linha>

  {estaEditando ? (
      <S.Linha>
        <S.LinhaForte><Phone/></S.LinhaForte>
        <S.Descricao
          disabled={!estaEditando}
          type="number"
          value={numero}
          onChange={evento => setNumero(Number(evento.target.value))}
          placeholder="Digite apenas números"
        />
      </S.Linha>
    ) : (
      <S.Linha>
          <S.LinhaForte><Phone/></S.LinhaForte> 
          <S.DescricaoTexto>
            {formatarTelefone(numero)}
          </S.DescricaoTexto> 
      </S.Linha>
    )}

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(editar({
                  email,
                  tipo,
                  status,
                  nome,
                  numero: Number(numero)
                }))
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelar onClick={cancelarEdicao}>Cancelar</S.BotaoCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelar onClick={() => dispatch(remover(numero))}>Remover</S.BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default MeusContatos