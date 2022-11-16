import Route from '@ember/routing/route';

export default class SignupRoute extends Route {
    async model(){
// let movie=await this.store.findRecord('movie',1);
//  movie.title="movie4";
//  movie.save();
let movie=await this.store.peekRecord('movie',2);
movie.destroyRecord();
    }
}
