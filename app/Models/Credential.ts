import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { Naturalidade, EstadoCivil, Genero, TipoDados } from 'App/Utils/index'
import { User } from 'App/Models/index'


export default class Credential extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => User)
  public user_id: BelongsTo<typeof User>

  @column()
  public nome: string

  @column()
  public nacionalidade: string

  @column()
  public naturalidade: Naturalidade

  @column()
  public estado_civil: EstadoCivil

  @column()
  public genero: Genero

  @column({ serialize: (value: DateTime) => {
    return value.toFormat("dd/MM/yyyy");
  }})
  public data_nascimento: DateTime

  @column()
  public profissao: string

  @column()
  public endereco_residencial: string

  @column()
  public email: string

  @column()
  public indicacao: string

  @column()
  public dados: TipoDados

  @column()
  public endereco_comercial: string

  @column()
  public telefone_contato: string

  @column()
  public rg: string

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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
