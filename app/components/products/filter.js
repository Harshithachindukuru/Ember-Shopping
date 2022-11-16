import Component from '@glimmer/component';

export default class ProductsFilterComponent extends Component {
    get results() {
        let { products, query } = this.args;
    
        if (query) {
          products = products.filter((product) => product.title.includes(query));
        }
    
        return products;
      }
}
