{/* <span id="temp" class="fa"></span> */ }

const tempLoad = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = '&#xf2cb';
    temp.style.color = '#0517f7';

    setTimeout(() => {
        temp.innerHTML = '&#xf2cb';
        temp.style.color = '#0517f7';
    }, 1000);

    setTimeout(() => {
        temp.innerHTML = '&#xf2ca';
        temp.style.color = '#12c161';
    }, 2000);

    setTimeout(() => {
        temp.innerHTML = '&#xf2c9';
        temp.style.color = '#12c161';
    }, 3000);

    setTimeout(() => {
        temp.innerHTML = '&#xf2c8';
        temp.style.color = '#ffbe00';
    }, 4000);

    setTimeout(() => {
        temp.innerHTML = '&#xf2c7';
        temp.style.color = '#ce1818';
    }, 5000);

};

tempLoad();

setInterval(tempLoad, 6000);