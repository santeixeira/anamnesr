import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { User } from 'App/Models'
import RegisterValidator from 'App/Validators/Auth/RegisterValidator'

export default class UsersController {

  public async index({}: HttpContextContract) {
    
  }

  public async store({ request, response, auth }: HttpContextContract) {
    const val = await request.validate(RegisterValidator);
    const data = await User.create({...val})
    
    const query = await User.findByOrFail('email', val.email);
    
    const token = await auth.attempt(query.email, query.password, {
      expiresIn: "30mins",
    })
    

    // response.redirect('/cadastro')

    return { created: data}
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
