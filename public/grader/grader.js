QUnit.done(function( details ) {

  if (details.passed === details.total && details.failed === 0) {
    window.dispatchEvent(new CustomEvent('tests-pass', {'detail': 'passed'}));
  }

});
