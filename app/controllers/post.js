import Controller from '@ember/controller';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
export default class PostController extends Controller {
    @service store;
@action 
async createPost(event){
event.preventDefault();
// console.log(this.title,this.image);
let post= await this.store.createRecord('item',{
    title:this.title,
    brand:this.brand,
    occasion:this.occasion,
    cost:this.cost,
    image:this.image
});
post.save().then(()=>{
    this.transitionToRoute('product');
});
}
}
