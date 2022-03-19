import Route from '@ioc:Adonis/Core/Route'

Route 
.resource(`/client`, 'ClientsController')
  .apiOnly()
  .middleware( {
  store: [ 'auth' ],
  update: [ 'auth' ],
  destroy: [ 'auth' ],
})