import Login from 'App/Models/Login'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'


export default class Anamnesis extends BaseModel {
  @hasOne(() => Login, {
    foreignKey: 'id',
  })
  public login: HasOne<typeof Login>

}
