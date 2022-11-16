import Model, { attr }  from '@ember-data/model';

export default class TokenModel extends Model {
@attr username;
@attr password;
}
