import * as enums from '../Utils/enums/Tarefa'



class Tarefa {
  nome: string
  tipo: enums.Tipo
  status: enums.Status
  email: string
  numero: number

  constructor(nome: string, tipo: enums.Tipo, status: enums.Status, email: string, numero: number) {
    this.nome = nome
    this.tipo = tipo
    this.status = status
    this.email = email
    this.numero = numero
    
  }
}

export default Tarefa
