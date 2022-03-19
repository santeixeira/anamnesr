import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Anamnesis extends BaseSchema {
  protected tableName = 'anamnesis'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
