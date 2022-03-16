import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class UsersController {
  public async index ( {request}: HttpContextContract ) {
    const data = request.only(["nm_login", "nm_senha"])

    console.log(data)
  }
}
