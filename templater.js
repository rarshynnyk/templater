(function($) {
    function render(template, element) {
        const regexp = /{{(.*?)}}/g;

        return template.replace(regexp, (match, parameter) => {
            const isHtml = parameter === 'html';

            return isHtml ? element.innerHTML : element.getAttribute(parameter)
        });
    }

    function run(elements, tag, template) {
        elements.each(function(index, element) {
            element.outerHTML = render(template, element);
        });
    }

    function getTags(element, tags) {
        Object.keys(tags).map(tag => {
            if (tags.hasOwnProperty(tag)) {
                const elements = element.find(tag);

                if (elements.length) {
                    run(elements, tag, tags[tag]);
                }
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
