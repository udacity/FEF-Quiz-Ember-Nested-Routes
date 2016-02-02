import { moduleFor, test } from 'ember-qunit';

moduleFor('route:bricks/red', 'Quiz - Routes', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('/bricks/red exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
