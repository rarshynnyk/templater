(function($) {
    function render(template, element) {
        const regexp = /{{(.*?)}}/g;

        return template.replace(regexp, (index, parameter) => {
            const isHtml = parameter === 'html';

            return isHtml ? element.innerHTML : element.getAttribute(parameter);
        });
    }

    function run(element, tag, template) {
        const children = element[0].querySelector(tag);

        if (!children) return;

        children.outerHTML = render(template, children);
        run(element, tag, template);
    }

    function getTags(element, tags) {
        Object.keys(tags).map(tag => {
            if (tags.hasOwnProperty(tag)) {
                run(element, tag, tags[tag]);
            }
        });
    }

    $.fn.templater = function(options) {
        return this.each(function(index, el) {
            if (typeof options === 'undefined' || typeof options.tags === 'undefined')
                return;

            const element = $(el);
            getTags(element, options.tags);
        });
    }
})(jQuery);
