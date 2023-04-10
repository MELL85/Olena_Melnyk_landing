(() => {

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element_show');
            } else {
                change.target.classList.remove('element_show');
            }
        });
    }

    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element_animation');
    let elements1 = document.querySelectorAll('.element_animation_black');

    for (let elm of elements) {
        observer.observe(elm);
    }

    for (let elm of elements1) {
        observer.observe(elm);
    }            

})();