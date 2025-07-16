import { type PayloadAction, createSlice  } from '@reduxjs/toolkit'
import * as enums from '../../Utils/enums/Tarefa'

type FiltroState = {
  termo?: string
  criterio: 'Tipo' | 'Status' | 'Todas'
  valor?: enums.Tipo | enums.Status

}

const initialState: FiltroState = {
  termo: '',
  criterio: 'Todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltro: (state, action: PayloadAction <FiltroState>) => {
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    }
  }
})


export const { alteraTermo, alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
