import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
    email: schema.string({trim: true}, [rules.email()]),
    cpf: schema.string({trim: true}),
    username: schema.string({trim: true}, [rules
      .unique({ table: 'users', column: 'username'})]),
    password: schema.string({ trim: true }, [
      rules.regex(
        RegExp("^(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[-+_!@#$%^&*.,?]).+$")
      ),
      rules.confirmed('passwordConfirmation')
    ]),
  })

  public cacheKey = this.ctx.routeKey

  public messages = {}
}
