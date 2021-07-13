const buttonSunrise = document.querySelector('.sunriseButton')
const buttonMorning = document.querySelector('.morningButton');
const buttonNight = document.querySelector('.nightButton');
const body = document.getElementById('body');

buttonSunrise.addEventListener('click', () => {
    const currentClass = body.classList[0];
    body.classList.replace(currentClass, 'sunrise')
})

buttonMorning.addEventListener('click', () => {
    const currentClass = body.classList[0];
    body.classList.replace(currentClass, 'morning')
})

buttonNight.addEventListener('click', () => {
    const currentClass = body.classList[0];
    body.classList.replace(currentClass, 'night')
})