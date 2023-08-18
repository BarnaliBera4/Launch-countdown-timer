const countToDate = new Date().setHours(new Date().getHours() + 336);

let previous;
setInterval(() => {
    const currentDate = new Date();

    const timeBetweenDates = Math.floor((countToDate - currentDate) / 1000);
    
    if (timeBetweenDates !== previous) {
        flipAllCards(timeBetweenDates);
    }
    previous = timeBetweenDates;
}, 1000);
function flipAllCards(time) {
    
    const days=parseInt( time / (24 * 3600));
    time=time % (24*3600);
    const hours=parseInt(time/3600);
    time=time%3600;
    const minutes=parseInt(time/60);
    time=time%60;
    const seconds=time;
    const daysCard = document.querySelector('.days > .flipcard');
    const hoursCard = document.querySelector('.hours > .flipcard');
    const minutesCard = document.querySelector('.minutes > .flipcard');
    const secondsCard = document.querySelector('.seconds > .flipcard');
    flipCardd(daysCard, days);
    flipCardd(hoursCard, hours);
    flipCardd(minutesCard, minutes);
    flipCardd(secondsCard, seconds);
}
function flipCardd(flipCard, time) {
    time = String(time).padStart(2, '0');
    const currentValue = flipCard.querySelector('.top').innerText;
    if (time == currentValue) {
        console.log(time);
        return;
    }
    const topFlip = document.createElement('div');
    topFlip.classList.add('top-flip');
    topFlip.innerText = currentValue;
    const bottomFlip = document.createElement('div');
    bottomFlip.classList.add('bottom-flip');
    bottomFlip.innerText = time;
    
    const topHalf = flipCard.querySelector('.top');
    const bottomHalf = flipCard.querySelector('.bottom');
    
    topFlip.addEventListener('animationstart', () => {
        topHalf.innerText = time;
    })
    
    topFlip.addEventListener('animationend', () => {
        topFlip.remove()
    });
    bottomFlip.addEventListener('animationend', () => {
        bottomHalf.innerText = time;
        bottomFlip.remove()
    });
    flipCard.appendChild(topFlip);
    flipCard.appendChild(bottomFlip);
}
// function flipCard(flipCard, time) {
//     time = String(time).padStart(2, '0');
//     const currentValue = flipCard.querySelector('.top').innerText;
//     if (time == currentValue) return;
//     // const topFlip = document.createElement('div');
//     // topFlip.classList.add('top-flip');
//     // topFlip.innerText = currentValue;
//     // const bottomFlip = document.createElement('div');
//     // bottomFlip.classList.add('bottom-flip');
//     // bottomFlip.innerText = time;
//     const topHalf = flipCard.querySelector('.top');
//     const bottomHalf = flipCard.querySelector('.bottom');
//     // topFlip.addEventListener('animationstart', () => {
//          topHalf.innerText = time;
//     // })
//     // topFlip.addEventListener('animationend', () => {
//     //     topFlip.remove()
//     // });
//     // bottomFlip.addEventListener('animationend', () => {
//         bottomHalf.innerText = time;
//     //     bottomFlip.remove()
//     // });
//     // flipCard.appendChild(topFlip);
//     // flipCard.appendChild(bottomFlip);
// }
