import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | online shopping', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /online-shopping', async function(assert) {
    await visit('/online-shopping');

    assert.equal(currentURL(), '/online-shopping');
  });
});
