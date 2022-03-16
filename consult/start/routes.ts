/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
*/
import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/home', async () => {
    return {hello: 'world'} 
  })
  Route.resource('/login', 'LoginController').apiOnly()

  Route
    .resource('users', 'UsersController')
    .middleware({ '*': ['auth'] })

}).prefix('/api')

