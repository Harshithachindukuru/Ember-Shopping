import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class ProductRoute extends Route {
    // @service session;
    @service store;
//     beforeModel(transition){
// this.session.requireAuthentication(transition,'signin');
//     }
   async model(){
// return await this.store.findAll('movie');  
// return await this.store.findRecord('movie',1);
// let movie=await this.store.createRecord('movie',{
//     title:"movie3",
//     year:2022,
//     rating:5.0
// });
// movie.save();
// return await this.store.findAll('movie');  

  return await this.store.findAll('item');
}
// async model(params){
//   return await this.store.findRecord('item',params.id);
// }
}