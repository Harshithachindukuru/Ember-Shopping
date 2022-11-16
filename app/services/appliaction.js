import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AppliactionService extends Service {
    @tracked product;
    getProduct(){
        return this.product;
    }
    setProduct(product){
        let {id,title,brand,cost,image,occasion}=product;

        console.log(title+brand+cost+image+occasion);
        this.product={title,brand,cost,image,occasion,id};
    }
}
