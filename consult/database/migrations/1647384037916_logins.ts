import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Login extends BaseSchema {
  protected tableName = 'login'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username').unique().notNullable
      table.string('password').notNullable()
      table.string('remember_me_token').nullable()
      table.string('access_token').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
