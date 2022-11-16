import { Factory } from 'miragejs';

export default Factory.extend({
    title(i) {
        return `Item ${i}`; 
      },
    
      brand(i) {
        return `Item ${i}`;
      },
    
      occasion(i) {
        return `Item ${i}`;
      },
      image(i) {
        return `Item ${i}`;
      },
      cost(i) {
        return `Item ${i}`;
      },
});
