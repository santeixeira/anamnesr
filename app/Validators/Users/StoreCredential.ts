import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { estadoCivil, genero, naturalidade, tipoDados } from 'App/Utils'

export class StoreCredentialValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    nome: schema.string({trim: true}),
    nacionalidade: schema.string({trim: true}),
    naturalidade: schema.enum(naturalidade),
    estado_civil: schema.enum(estadoCivil),
    genero: schema.enum(genero),
    data_nascimento: schema.date({format: 'yyyy-MM-dd'}),
    profissao: schema.string({trim: true}),
    endereco_residencial: schema.string({trim: true}),
    email: schema.string({trim: true}, [rules.email()]),
    indicacao: schema.string({trim: true}),
    dados: schema.enum(tipoDados),
    endereco_comercial: schema.string({trim: true}),
    telefone_contato: schema.string({trim: true}),
    rg: schema.string({trim: true}),
    cpf: schema.string({trim: true}),
    nome_responsavel: schema.string({trim: true}),
    prof_responsavel: schema.string({trim: true}),
    contato_emergencia: schema.string({trim: true}),
    nome_emergencia: schema.string({trim: true}),
    cirurgiao_anterior: schema.string({trim: true}),
  })
  public messages = {}
}
