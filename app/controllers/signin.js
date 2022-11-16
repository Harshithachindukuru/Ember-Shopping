import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';

export default class SigninController extends Controller {
    @service session;
    @service router;
    @tracked error;
    @tracked username;
    @tracked password;
    @action
    async login(event){
        event.preventDefault();
        let { username, password } = this;
        try{
            let result=await this.session.authenticate('authenticator:token',username,password);
            console.log(result);
        }
        catch(error){
            this.error=error;
            console.log(this.error);
        }

        if(this.session.isAuthenticated){
          this.router.transitionTo('index');
          console.log("login success");
        }else{
          alert("invalid credentials");
        }
    }
    // @action
    // update(attr,event){
    //     this.[attr]=event.target.value;
    // }
    @action
  updateUsername(event) {
    this.username = event.target.value;
  }

  @action
  updatePassword(event) {
    this.password = event.target.value;
  }
}
