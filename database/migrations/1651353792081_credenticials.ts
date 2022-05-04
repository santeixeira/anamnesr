import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import { 
  estadoCivil, 
  naturalidade, 
  genero, 
  tipoDados
} from 'App/Utils/index'

export default class Credenticials extends BaseSchema {
  protected tableName = 'credenticials'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('users.id').onUpdate('CASCADE').onDelete('CASCADE')
      table.string('nome').notNullable()
      table.string('nacionalidade')
      table.enu('naturalidade', naturalidade).notNullable
      table.enu('estado_civil', estadoCivil).notNullable
      table.enu('genero', genero)
      table.dateTime('data_nascimento')
      table.string('profissao')
      table.string('endereco_residencial')
      table.string('email')
      table.string('indicacao')
      table.enu('dados', tipoDados)
      table.string('endereco_comercial')
      table.string('telefone_contato')
      table.string('rg')
      table.string('nome_responsavel')
      table.string('prof_responsavel')
      table.string('contato_emergencia')
      table.string('nome_emergencia')
      table.string('cirurgiao_anterior')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
