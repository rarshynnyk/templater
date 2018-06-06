const Templater = {
  components: [],

  addTag: function (tag, template) {
    if (typeof tag === 'undefined' || typeof template === 'undefined')
      return;

      this.components.push({
        'tag': tag,
        'template': template
      });
  },

  run: function () {
    this.components.forEach(component => {
      const element = document.querySelector(component.tag);
      
      element.outerHTML = component.template;
    });
  }
};
