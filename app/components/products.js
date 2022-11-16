import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
export default class ProductsComponent extends Component {
    @tracked query = '';
}
