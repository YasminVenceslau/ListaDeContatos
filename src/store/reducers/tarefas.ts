import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import Tarefa from "../../models/Tarefa";
import * as enums from '../../Utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState =  {
  itens: [
  {
  tipo: enums.Tipo.Família,
    status: enums.Status.Sim,
    nome: 'Ana Paula Martins',
    email: 'ana.martins@email.com',
    numero:   11985421034
  },
  {
    tipo: enums.Tipo.Trabalho,
    status: enums.Status.Nao,
    nome: 'Bruno Oliveira Silva',
    email: 'bruno.oliveira@email.com',
    numero:  21997654481
  },
  {
    tipo: enums.Tipo.Amigos,
    status: enums.Status.Nao,
    nome: 'Carla Menezes Rocha',
    email: 'carla.rocha@email.com',
    numero:   21997654481
  },
  {
    tipo: enums.Tipo.Família,
    status: enums.Status.Sim,
    nome: 'Diego Fernandes Lima',
    email:'diego.lima@email.com',
    numero:  41996453207
  },
  {
    tipo: enums.Tipo.Amigos,
    status: enums.Status.Nao,
    nome: 'Fernanda Souza Batista',
    email: 'fernanda.batista@email.com',
    numero:    51984337710
  },
  ]

}

const taredaSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
      remover: (state, action: PayloadAction<number>) => {
        state.itens = state.itens.filter(contato => contato.numero !== action.payload)
      },
      editar: ( state: { itens: any[]; }, action: PayloadAction<Tarefa> ) => {
        const indexDaTarefa = state.itens.findIndex (
          (t: { numero: number; }) => t.numero === action.payload.numero
        )

        if (indexDaTarefa >= 0 ) {
          state.itens[indexDaTarefa] = action.payload
        }
      },
      cadastrar: (state, action: PayloadAction <Omit<Tarefa, 'id'>>) => {
        const Existe = state.itens.find(
          (contato) =>
            contato.nome.toLowerCase() === action.payload.nome.toLocaleLowerCase() ||
            contato.numero === action.payload.numero ||
            contato.email.toLocaleLowerCase() === action.payload.email.toLocaleLowerCase()
       
        )
         
        if (Existe) {
          alert('Já existe este número e(ou) nome e(ou) E-mail cadastrado.')
        } else {

          const ultimaTarefa = state.itens [state.itens.length -1]

          const contatoNova = {
            ...action.payload,
            id: ultimaTarefa ? ultimaTarefa.numero + 1 : 1
          }
          state.itens.push(contatoNova)
        }
      },
      alteraStatus: (state, action: PayloadAction < {numero: Number, finalizado: boolean}>
      ) => {
        const indexDaTarefa = state.itens.findIndex (
          (t: { numero: number; }) => t.numero === action.payload.numero
        )

        if (indexDaTarefa >= 0 ) {
          state.itens[indexDaTarefa].status =action.payload.finalizado
            ? enums.Status.Sim
            : enums.Status.Nao
        }
      }

    }
  }
)

export const  { remover,editar,cadastrar, alteraStatus } = taredaSlice.actions

export default taredaSlice.reducer
