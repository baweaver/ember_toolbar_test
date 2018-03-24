import Component from '@ember/component';

export default Component.extend({
  cancel: false,

  lastPlayedWith: null,

  actions: {
    save() {
      this.set('lastPlayedWith', new Date());
      this.sendAction('save');
    }
  }
});
