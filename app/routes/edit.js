import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class EditRoute extends Route {
    @service store;
    @service appliaction;
   async model(params){
        // return await this.store.findRecord('item',params.id);
        console.log(params.id);
        let product= await this.store.findRecord('item',params.id);
        this.appliaction.setProduct(product);
        console.log(this.appliaction.getProduct());
        let result=this.appliaction.getProduct();
        return result;
      }
}
