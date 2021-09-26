const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerHTML = 0;
    counter.style.color = '#f7f70b';

    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target'); //conert into number one of the way to use
        
        const startingCount = Number(counter.innerHTML); //conert into number one of the another way to use

        const incr = targetCount / 100;
        
        if (startingCount < targetCount) {
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter, 9);
        } else {
            counter.innerHTML = targetCount;
        }
    };

    updateCounter();
});