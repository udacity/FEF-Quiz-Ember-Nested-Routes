import { test } from 'qunit';
import moduleForAcceptance from 'nested-routes/tests/helpers/module-for-acceptance';

moduleForAcceptance('Quiz - Nested Routes');

function canSeeTemplateContents(textToFind) {
  return find('.contents').text().toLowerCase().indexOf(textToFind) >= 0;
}

function canSeeNavLink(textToFind) {
  return find('ul.nav').text().toLowerCase().indexOf(textToFind) >= 0;
}

test('add nav menus', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok(canSeeNavLink('toys'), 'Can see the "Toys" nav link.');
    assert.ok(canSeeNavLink('bricks'), 'Can see the "Bricks" nav link.');
  });
});

test('visiting /toys', function(assert) {
  visit('/toys');

  andThen(function() {
    assert.equal(currentURL(), '/toys', 'The URL is "/toys"');
    assert.ok(canSeeTemplateContents('all toy categories'), 'Can see text "All Toy Categories" in template.');
  });
});

test('visiting /bricks', function(assert) {
  visit('/bricks');

  andThen(function() {
    assert.equal(currentURL(), '/bricks', 'The URL is "/bricks"');
    assert.ok(canSeeTemplateContents('all brick categories'), 'Can see text "All Brick Categories" in template.');
    assert.ok(canSeeTemplateContents('view all red bricks'), 'Can see link for nested Red Brick route in template.');
    assert.ok(canSeeTemplateContents('view all blue bricks'), 'Can see link for nested Blue Brick route in template.');
  });
});

test('navigating from /bricks to /bricks/red', function(assert) {
  visit('/bricks');
  click('#link-bricks-red');

  andThen(function() {
    assert.equal(currentURL(), '/bricks/red', 'The URL is "/bricks/red"');
    assert.ok(canSeeTemplateContents('all brick categories'), 'Can see text "All Brick Categories" in template.');
    assert.ok(canSeeTemplateContents('info for all red bricks'), 'Can see text "Info for all red bricks".');
  });
});

test('navigating from /bricks to /bricks/blue', function(assert) {
  visit('/bricks');
  click('#link-bricks-blue');

  andThen(function() {
    assert.equal(currentURL(), '/bricks/blue', 'The URL is "/bricks/blue"');
    assert.ok(canSeeTemplateContents('all brick categories'), 'Can see text "All Brick Categories" in template.');
    assert.ok(canSeeTemplateContents('info for all blue bricks'), 'Can see text "Info for all blue bricks".');
  });
});
