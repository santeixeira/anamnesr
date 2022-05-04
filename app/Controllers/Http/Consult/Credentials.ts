import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Credential } from 'App/Models/index'
import { StoreCredentialValidator } from 'App/Validators/index'

export default class CredentialsController {
  public async index({}: HttpContextContract) {}

  public async store({request, auth, response }: HttpContextContract) {
    const user = auth.user!
    const data = await request.validate(StoreCredentialValidator)
    
    const store = user.related('user').create({...data})

    return store;

  }

  public async show({request, response, auth}: HttpContextContract) {
    const { username } = request.params()
    const user = auth.user!;
    const data = await Credential.findByOrFail('username', username)
    if (user.id !== data.user_id){
      return response.unauthorized()
    }

    return data;

  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
