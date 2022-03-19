
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from "@ioc:Adonis/Core/Validator"
import User from "App/Models/User"

export default class AuthController {
  public async store({ request, auth }: HttpContextContract) {
    const {email, password} = request.all()

    const token = await auth.attempt(email, password , {
      expiresIn: '30 days'
    })
    return token
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.logout()
  }





  // public async register ({auth, request, response}: HttpContextContract) {
    
  //   const valid = schema.create({
  //     email: schema.string( { trim: true }, [
  //       rules.email(),
  //       rules.unique({ table: 'login', column: 'email'}),
  //     ]),
  //     password: schema.string({trim: true}, [rules.confirmed()]),
  //   });
  //   const userDetails = await request.validate({
  //     schema: valid,
  //   });

  //   const user = new Login();
  //   user.email = userDetails.email;
  //   user.password = userDetails.password;
  //   await user.save();
  //   await auth.login(user);
  //   response.redirect('/area-cliente')
  // }

  // public async login({auth, request, response}: HttpContextContract) {
  //   const email = request.input("email");
  //   const password = request.input("password");
  //   await auth.attempt(email, password);
  //   response.redirect('/area-cliente');
  // }
}
