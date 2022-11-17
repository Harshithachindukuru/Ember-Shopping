import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render,currentURL } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Integration | Component | nav-bar', function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    // assert.expect(2);
    await render(hbs`<NavBar/>`);
    assert.equal(this.element.querySelector('h1').textContent.trim(), 'Online Shopping');

    await click('.menu a');
    assert.equal(currentURL(), '/');
    assert.equal(this.element.querySelector('.menu-about').textContent.trim(), 'About');

    await click('.links .menu-about');
    assert.equal(currentURL(), '/signin');
    assert.equal(this.element.querySelector('.menu-contact').textContent.trim(), 'Contact');

    await click('.links .menu-contact');
    assert.equal(currentURL(), '/contact');
    assert.equal(this.element.querySelector('.menu-product').textContent.trim(), 'Products');

    await click('.links .menu-product');
    assert.equal(currentURL(), '/product');

    assert.equal(this.element.querySelector('.menu-signin').textContent.trim(), 'Sign in');

    await click('.sign .menu-signin');
    assert.equal(currentURL(), '/signin');
    assert.equal(this.element.querySelector('.menu-signup').textContent.trim(), 'Sign up');

    await click('.sign .menu-signup');
    assert.equal(currentURL(), '/signup');
  });
});
