import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | proudlist', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:proudlist');
    assert.ok(route);
  });
});
