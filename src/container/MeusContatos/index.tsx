import { useState, type FormEvent } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


import { BotaoSalvar, Campo, MainContainer, Titulo } from "../../styles"
import { Forma, Opcoes, Opcao, NovoContaiiner } from "./styles"
import * as enums from "../../Utils/enums/Tarefa"
import { cadastrar } from "../../store/reducers/tarefas"
import { UsersRound } from "lucide-react"

const MeusContatos = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [ nome, setnome] = useState('')
  const [ email, setEmail] = useState('')
  const [ numero, setNumero] = useState('')
  const [tipo, settipo] = useState(enums.Tipo.Amigos)

  const cadastrarTarefas = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(cadastrar({
      nome,
      tipo,
      email,
      status: enums.Status.Nao,
      numero: Number(numero)
    })
    )
    navigate('/')
  }

  return (
    <NovoContaiiner>
      <Titulo> <UsersRound /> Novo Contatinho </Titulo>
      <Forma onSubmit={cadastrarTarefas}>
          <Campo
            value={nome}
            onChange={(evento) => setnome (evento.target.value)}
            type="text"
            placeholder="Nome"
          />
          <Campo
            value={email}
            onChange={({ target }) => setEmail (target.value)}
            as='input'
            type="email"
            required
            placeholder="E-mail">
          </Campo>
          <Campo
            value={numero}
            onChange={({ target }) => setNumero (target.value)}
            as='input'
            type="number"
            placeholder="Número (00) 00000-0000">
          </Campo>
          <Opcoes>
            <p>Tipos</p>
            {Object.values(enums.Tipo).map(tipo =>(
              <Opcao key={tipo}>
              <input
                value={tipo}
                name="Tipo"
                type="radio"
                onChange={(evento) => settipo(evento.target.value  as enums.Tipo)}
                id={tipo}
                defaultChecked={tipo === enums.Tipo.Amigos}
              /> {' '}
                <label htmlFor={tipo}>{tipo}</label>
              </Opcao>
            ))}
          </Opcoes>
          <BotaoSalvar type='submit' >Cadastrar</BotaoSalvar>
      </Forma>
    </NovoContaiiner>
  )
}

export default MeusContatos
