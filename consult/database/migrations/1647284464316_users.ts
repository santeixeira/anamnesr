import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'login'
  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("email").unique().notNullable();
      table.string("password").notNullable();
      table.string('remember_me_token').nullable()
      table.timestamps(true);
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
