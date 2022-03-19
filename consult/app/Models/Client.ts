import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Login from 'App/Models/Login'

export default class Client extends BaseModel {
  @hasOne (() => Login, {
    foreignKey: 'id'
  })
  public id: HasOne<typeof Login>

  @column()
  public nome: string

  @column()
  public nacionalidade: string

  @column()
  public naturalidade: string

  @column()
  public estado_civil: string

  @column()
  public sexo: string

  @column()
  public data_nascimento: DateTime

  @column()
  public profissao: string
 
  @column()
  public endereco_residencial: Object

  @column()
  public email: string

  @column()
  public indicacao: string

  @column()
  public dados: string

  @column()
  public endereco_comercial: Object

  @column()
  public telefone_contato: string

  @column()
  public rg: string

  @column()
  public cpf: string

  @column()
  public nome_responsavel: string
  
  @column()
  public prof_responsavel: string
  
  @column()
  public contato_emergencia: string
  
  @column()
  public nome_emergencia: string
  
  @column()
  public cirurgiao_anterior: string
}
