import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render,click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Integration | Component | product/image', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`
      <Product::Image
      src="/assets/images/cart.png"
      alt="cart"
    />
      `);
  
      assert
      .dom('.image img')
      .exists()
      .hasAttribute('src', '/assets/images/cart.png')
      .hasAttribute('alt', 'cart');
    });
    test('clicking on the component toggles its size', async function (assert) {
      await render(hbs`
        <Product::Image
          src="/assets/images/cart.png"
          alt="cart"
        />
      `);
  
      assert.dom('button.image').exists();
  
      assert.dom('.image').doesNotHaveClass('large');
      assert.dom('.image small').hasText('View Larger');
  
      await click('button.image');
  
      assert.dom('.image').hasClass('large');
      assert.dom('.image small').hasText('View Smaller');
  
      await click('button.image');
  
      assert.dom('.image').doesNotHaveClass('large');
      assert.dom('.image small').hasText('View Larger');
  });
});
