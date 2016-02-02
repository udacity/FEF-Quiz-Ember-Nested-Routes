import { moduleFor, test } from 'ember-qunit';

moduleFor('route:bricks', 'Quiz - Routes', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('/bricks exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
