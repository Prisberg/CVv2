let interval;
const width = window.matchMedia("(max-width: 700px)")

window.onload = function () {
    tabletMedia(width)
    width.addEventListener('change', tabletMedia)
    interval = setInterval(welcome, 1250)

    addListener();
}

function welcome() {
    const ele = document.getElementById('click');
    ele.style.opacity = (ele.style.opacity === '0' ? '1' : '0');
    setTimeout(function () {
        if (ele.style.opacity === '1' && ele.innerText === 'Click to view my CV') {
            ele.textContent = 'Klicka för att se mitt CV';
        } else if (ele.style.opacity === '1' && ele.innerText === 'Klicka för att se mitt CV') {
            ele.textContent = 'Click to view my CV';
        }
    }, 1300)
}

function addListener() {
    window.addEventListener('click', enter, { once: true });
}

function enter() {
    goToContent();
    clearInterval(interval);
}

function goToContent() {
    const entrance = document.getElementById('entrance');
    const layout = document.getElementById('layout');
    const click = document.getElementById('click');
    const nameTitel = document.getElementById('nameTitel');

    entrance.classList.add('offTop');
    entrance.addEventListener('transitionend', () => {
        entrance.className = 'is-none'
        document.body.classList.remove('overflow');
    })

    layout.className = '';
    nameTitel.classList.remove('offRight', 'center');
    click.className = 'is-none';

    modeSwitch();
    langSwitch();
    menuSwitch();
    iconSwitch();
}

function langSwitch() {
    const button = document.getElementById('langButton')
    button.addEventListener('click', () => {
        const swedish = document.body.querySelectorAll('[lang="sv"]');
        const english = document.body.querySelectorAll('[lang="en"]');

        if (swedish[0].classList.contains('is-none')) {
            swedish.forEach(element => {
                element.classList.remove('is-none');
            });
            english.forEach(element => {
                element.classList.add('is-none');
            });
            button.textContent = ('English')
        } else {
            english.forEach(element => {
                element.classList.remove('is-none');
            });
            swedish.forEach(element => {
                element.classList.add('is-none');
            });
            button.textContent = ('Svenska');
        }
    })
}

function modeSwitch() {
    const button = document.getElementById('modeButton')
    button.addEventListener('click', () => {
        if (document.body.className === 'white') {
            document.body.className = 'gray';
            button.textContent = 'Light-mode';
        } else {
            document.body.className = 'white';
            button.textContent = 'Dark-mode';
        }
    })
}

function menuSwitch() {
    const button = document.getElementById('menuBurger')
    const menuInner = document.getElementById('navInner')

    button.addEventListener('click', () => {
        if (menuInner.classList.contains('offRight')) {
            menuInner.classList.remove('offRight')
            outsideMenu();
        } else {
            menuInner.classList.add('offRight')
        }
    })
}

function outsideMenu() {
    const layout = document.getElementById('layout')
    const menuInner = document.getElementById('navInner')
    const icon = document.getElementById('menuBurger');

    layout.addEventListener("click", () => {
        if (width.matches) {
            menuInner.classList.add('offRight')
            icon.classList.remove('open')
        } else {
            return;
        }
    }, { once: true })
}


function iconSwitch() {
    const icon = document.getElementById('menuBurger');
    const menuInner = document.getElementById('navInner')

    icon.addEventListener('click', () => {
        if (!menuInner.classList.contains('offRight')) {
            icon.classList.add('open')
        } else {
            icon.classList.remove('open')
        }
    })
}

function tabletMedia(width) {
    const icon = document.getElementById('menuBurger');
    const menuInner = document.getElementById('navInner')

    if (width.matches) {
        menuInner.classList.add('offRight')
        icon.classList.remove('open')
    } else {
        menuInner.classList.remove('offRight')
        icon.classList.add('open')
    }
}