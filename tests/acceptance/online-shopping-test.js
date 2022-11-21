import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | online shopping', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  
  test('visiting /', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to Online Shopping!');

    assert.dom('jumbo a.button').hasText('About Us');
    await click('jumbo a.button');

    assert.equal(currentURL(), '/about');
  });
});
