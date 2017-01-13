import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveAnswer(params) {
      debugger;
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;

      question.get('answers').addObject(newAnswer);

      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', question);
    }
  }
});
