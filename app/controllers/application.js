import Controller from '@ember/controller';

export default Controller.extend({
  isDisabled: true,

  actions: {
    saveStuff() {
      alert("OHAI!");
    }
  }
});
