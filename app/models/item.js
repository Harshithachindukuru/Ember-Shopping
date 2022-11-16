import Model, { attr } from '@ember-data/model';

export default class ItemModel extends Model {
    @attr title;
    @attr brand;
    @attr occasion;
    @attr image;
    @attr cost;
}
