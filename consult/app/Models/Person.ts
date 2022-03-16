import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Person extends BaseModel {
  @column({ isPrimary: true } )
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: string

  @column()
  public data_nascimento: DateTime
 
  @column()
  public endereco: Object

  @column()
  public sexo: string

  @column()
  public estado_civil: string

  @column()
  public numero_contato: string

  @column()
  public profissao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
