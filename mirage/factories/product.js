import { Factory } from 'miragejs';

export default Factory.extend({
    title(i) {
        return `Product ${i}`; // Movie 1, Movie 2, etc.
      },
    
      brand(i) {
        return `Product ${i}`;
      },
    
      occasion(i) {
        return `Product ${i}`;
      },
      image(i) {
        return `Product ${i}`;
      },
      cost(i) {
        return `Product ${i}`;
      },
});
