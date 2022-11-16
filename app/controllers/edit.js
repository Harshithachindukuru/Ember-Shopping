import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class EditController extends Controller {
    @service appliaction;
    @action
    async edit(event) {
        event.preventDefault();
        // console.log(this.model);
        // let edit = await this.model;
        // edit.save().then(() => {
        //     this.transitionToRoute('product');
        // });
        // store.findRecord('item', 1).then(function(post) {
        //     post.title; // => "Rails is Omakase"
          
        //     post.title = 'A new post';
          
        //     post.save(); // => PATCH to '/posts/1'
        //   });
         let result= await this.store.findRecord('item', this.model.id);
         console.log(this.model);
         result.title=this.model.title;
         result.brand=this.model.brand;
         result.cost=this.model.cost;
         result.occasion=this.model.occasion;
         result.image=this.model.image;
         result.save().then(()=> this.transitionToRoute('product'));
console.log(this.result);
    }
}
