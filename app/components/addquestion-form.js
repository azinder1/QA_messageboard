import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        note: this.get('note'),
        tag: this.get('tag')
      };
      this.sendAction("saveQuestion", params);
    },
  }
});
