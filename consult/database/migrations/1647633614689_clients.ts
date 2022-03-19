import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clients extends BaseSchema {
  protected tableName = 'clients'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id')
      table.string('nome').notNullable()
      table.string('nacionalidade')
      table.string('naturalidade')
      table.string('estado_civil')
      table.string('sexo')
      table.dateTime('data_nascimento')
      table.string('profissao')
      table.string('endereco_residencial')
      table.string('email')
      table.string('indicacao')
      table.string('dados')
      table.string('endereco_comercial')
      table.string('telefone_contato')
      table.string('rg')
      table.string('cpf')
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
