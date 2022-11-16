import Base from 'ember-simple-auth/authenticators/base';
import{inject as service} from '@ember/service';
export default class TokenAuthenticator extends Base{
  @service store;
  restore(data) {
  }

  async authenticate(username,password) {
    // let response=await fetch('/api/token',{
    //   method:'POST',
    //   headers:{
    //     'Content-Type':'application/json'
    //   },
    //   body: JSON.stringify({
    //     username,password
    //   })
    // });
    // let response=await this.store.findRecord('token',username);
    // console.log(response.username);
    let response=await this.store.createRecord('token',{
      username,
      password
    });
    response.save();
    console.log(response);
    console.log(response.username);
    // if(response.ok){
    //   return response.json();
    // }else{
    //   let error = await response.text();
    //   throw new Error(error); 
    // }
    // return response;
  }

  async invalidate(data) {

  }
}
