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
    let elementL = document.querySelectorAll('.element_animation-left');
    let elementR = document.querySelectorAll('.element_animation-right');
    let elements1 = document.querySelectorAll('.element_animation_text');



    for (let elm of elementL) {
        observer.observe(elm);
    }

    for (let elm of elementR) {
        observer.observe(elm);
    }

    for (let elm of elements1) {
        observer.observe(elm);
    }            

    
})();