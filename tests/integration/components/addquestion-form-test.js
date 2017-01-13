import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('addquestion-form', 'Integration | Component | addquestion form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{addquestion-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#addquestion-form}}
      template block text
    {{/addquestion-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
