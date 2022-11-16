import { Response } from 'miragejs';
export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = 'api';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  // this.get('/movies');
  // this.get('/movies/:id');
  // this.post('/movies');
  // this.patch('/movies/:id'); 
  // this.del('/movies/:id');
  this.get('/products');
  this.del('/products/:id');
  this.get('/items');
  this.del('/items/:id');
  this.post('/items');
  this.patch('/items/:id'); 
  this.get('/items/:id');
  // this.post('/tokens');
  this.get('/tokens/:id');

  this.get('/tokens/:username',(schema, request)=> {

    let username =request.params.username;

    console.log('username is',username)

    let user = schema.tokens.findBy({username:username})

    if(user!=null){

      return user;

    }else{
      return null;
    }

  });
  this.post('/tokens',(schema,request)=>{
    let login=JSON.parse(request.requestBody).data.attributes;
    let post = schema.tokens.findBy({ username: login.username, password: login.password });
    // console.log(login);
    console.log(post);
    if(post!=null){
      return post;
    }else{
      return new Response(401, { some: 'header' }, { errors:  'name cannot be blank' });
    }
  });
  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
}
