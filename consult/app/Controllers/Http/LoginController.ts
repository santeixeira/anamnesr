import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Login from 'App/Models/Login'

export default class LoginController {

  public async store({request, response} : HttpContextContract){
    const data = request.body()

    const login = await Login.create(data)

    response.status(201)

    return {
      msg: "Login succeed",
      data: login,
    }
  }


  public async index() {
    const login = await Login.all()

    return {
      user: login,
    }
  }
}
