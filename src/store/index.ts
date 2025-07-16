import { configureStore }  from '@reduxjs/toolkit'

import taredaReducer from './reducers/tarefas'
import filtroReducer from './reducers/filtro'

const store = configureStore ({
  reducer: {
    contatos: taredaReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType <typeof store.getState>

export default store
