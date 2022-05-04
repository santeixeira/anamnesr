import Route from '@ioc:Adonis/Core/Route'


Route.post('/login', 'Auth/Login.store')

Route.post('/cadastro', 'Auth/Users.store')