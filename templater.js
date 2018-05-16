const Templater = {
    run: () => {
        const elements = [...document.getElementsByTagName('bootstrap_button')];

        if ( !elements.length ) return;

        elements.forEach(element => {
            const newElement = document.createElement('button');

            newElement.classList = 'btn btn-default';
            newElement.setAttribute('type', 'button');
            newElement.innerHTML = element.innerHTML ? element.innerHTML : 'Some text';
            
            element.parentNode.replaceChild(newElement, element);
        });
    }
};