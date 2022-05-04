import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { LoginValidator } from 'App/Validators/index'

export default class LoginController {

  public async store({request, response, auth }: HttpContextContract) {
    const { email, password } = await request.validate(LoginValidator)

    const token = await auth.attempt(email, password, {
      expiresIn: '30 days',
    })

    response.redirect('/dashboard');
    return token;
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.logout();
  }
}
