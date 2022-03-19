import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'


export default class ClientsController {
  public async index({}: HttpContextContract) {
    const person = await  Client.all()

    return person;
  } 
  public async store({ request, response }: HttpContextContract) {
    const data = request.body()
    const register = await Client.create(data)

    response.status(201)

    return {
      msg: 'Register succeed',
      data: register,
    } 
  }

  public async show({ params, response }: HttpContextContract) {
    const person = await Client.findOrFail(params.id)
    return response.send(person)
  }

  public async update({ params, request }: HttpContextContract) { 
    const person = await Client.findOrFail(params.id)
    const data = request.only(['estado_civil', 
      'profissao', 
      'email', 
      'endereco_residencial', 
      'dados'])

    person.merge(data)

    await person.save()

    return person
  }

  public async destroy({ params }: HttpContextContract) {
    const person = await Client.findOrFail(params.id)
    await person.delete()
  }
}

