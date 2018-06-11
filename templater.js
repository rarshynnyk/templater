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

  render: function (template, element) {
    const regexp = /{{(.*?)}}/g;
    let params;

    while ((params = regexp.exec(template)) !== null) {
      const isHtml = params[1] === 'html',
            htmlText = element.innerHTML.trim(),
            defaultText = 'Some text';

      if (isHtml) {
        template = template.replace(params[0], htmlText.length ? htmlText : defaultText);
      } else {
        template = template.replace(params[0], element.getAttribute(params[1]));
      }
    }

    return template;
  },

  run: function () {
    this.components.forEach(component => {
      const element = document.querySelector(component.tag);

      element.outerHTML = this.render(component.template, element);
    });
  }
};
