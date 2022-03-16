
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from "@ioc:Adonis/Core/Validator"
import Login from "App/Models/Login"

export default class AuthController {
  public async register ({auth, request, response}: HttpContextContract) {
    
    const valid = schema.create({
      email: schema.string( { trim: true }, [
        rules.email(),
        rules.unique({ table: 'login', column: 'email'}),
      ]),
      password: schema.string({trim: true}, [rules.confirmed()]),
    });
    const userDetails = await request.validate({
      schema: valid,
    });

    const user = new Login();
    user.email = userDetails.email;
    user.password = userDetails.password;
    await user.save();
    await auth.login(user);
    response.redirect('/area-cliente')
  }

  public async login({auth, request, response}: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");
    await auth.attempt(email, password);
    response.redirect('/area-cliente');
  }
}
