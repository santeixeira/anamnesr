import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Person extends BaseSchema {
  protected tableName = 'person'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.foreign('id')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
