import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    editQuestion(question, params) {
      Object.keys(params).forEach(function(key){
        if(params[key] !==undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    }
  }
});
