import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {action} from '@ember/object';
export default class ProductController extends Controller {
    @service store;
    @action
    async delete(id){
        let confirmed=window.confirm(
            'Are you sure you want to delete the item?'
        );
        if(confirmed){
            let items=await this.store.peekRecord('item',id);
            console.log(items);
            items.destroyRecord();
        }
    } 
}
