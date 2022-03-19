import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Login from 'App/Models/Login'
import { v4 as uuidv4} from 'uuid'

export default class LoginController {

  public async store({request, response} : HttpContextContract){
    const data = request.body()

    const access_token = `${uuidv4()}` 
    const remember_me_token = `${uuidv4()}`

    data.access_token = access_token
    data.remember_me_token = remember_me_token

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
