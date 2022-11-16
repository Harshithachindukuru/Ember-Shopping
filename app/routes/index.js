import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class IndexRoute extends Route {
    @service store;
    async model() {
      return this.store.findAll('product');
    }

    // async model() {
    //   let response = await fetch('/api/products.json');
    //   let { data } = await response.json();
  
    //   return data.map((model) => {
    //     let { attributes } = model;
    //     let type;
    //     return { type, ...attributes };
    //   });
    // }
    
}
