import Tarefa from "../../components/MeusContatos"
import { MainContainer, Titulo } from "../../styles/index"

import { useSelector } from "react-redux"
import type { RootReducer } from "../../store"


const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro)
  
  
    
  const FiltraContatos = () => {

    let contatosFiltradas  = itens

    if (termo !== undefined) {
      contatosFiltradas = contatosFiltradas.filter(
        ( item ) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'Tipo') {
        contatosFiltradas = contatosFiltradas.filter(
          (item) => item.tipo === valor)
      } else if (criterio === 'Status') {
          contatosFiltradas = contatosFiltradas.filter(
          (item) => item.status === valor)
      }
      return contatosFiltradas
    } else {
      return itens
    }
  }



  const contatos = FiltraContatos()


  return (
  <>
      <Titulo as='p'>
        Meus Contatinhos
      </Titulo>
    <MainContainer>
      <ul>
          {contatos.map( (t) =>
            (<li key = {t.nome}>
              <Tarefa
                nome={t.nome}
                status={t.status}
                tipo={t.tipo}
                email={t.email}
                numero={t.numero}
              />
              
            </li>
          ))}
      </ul>
    </MainContainer>

  </>
  )
}

export default ListaDeContatos
