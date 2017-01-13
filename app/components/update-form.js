import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if(confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    edit(question) {
      debugger;
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        tag: this.get('tag'),
        note: this.get('note')
      };
      this.sendAction('editQuestion', question, params);
    }
  }
});
