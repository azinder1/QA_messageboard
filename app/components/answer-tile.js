import Ember from 'ember';

export default Ember.Component.extend({
  showAnswerForm: false,
  actions: {
    showAnswerForm() {
      this.set('showAnswerForm', true);
    },
    saveAnswer() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        rating: 0,
        question: this.get('question')
      };
      this.set('showAnswerForm', false);
      this.sendAction("saveAnswer", params);
    },
  }
});
