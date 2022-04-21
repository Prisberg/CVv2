let interval;
let pathBoolean = false;

function loadFix() {
    let path = window.location.href.toString()
    if (path.includes('#')) {
        pathBoolean = true;
        enter();
    } else {
        return;
    }
}

window.onload = function () {
    loadFix();
    if (!pathBoolean) {
        addListener();
    } else {
        return;
    }

    interval = setInterval(welcome, 1250)
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
    window.addEventListener('click', enter);
}

function removeListener() {
    window.removeEventListener('click', enter);
}

function enter() {
    removeListener();
    goToContent();
    clearInterval(interval);
    document.body.classList.remove('overflow');
}

function goToContent() {
    const entrance = document.getElementById('entrance');
    const layout = document.getElementById('layout');
    const click = document.getElementById('click');
    const nameTitel = document.getElementById('nameTitel');

    entrance.classList.add('offTop');
    entrance.addEventListener('transitionend', () => {
        entrance.className = 'is-none'
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
        console.log('click')
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
    const button = document.getElementById('menuButton')
    const menuInner = document.getElementById('navInner')

    button.addEventListener('click', () => {
        if (menuInner.classList.contains('offRight')) {
            menuInner.classList.remove('offRight')
        } else {
            menuInner.classList.add('offRight')
        }
    })
}

function iconSwitch() {
    const icon = document.getElementById('menuButton');

    icon.addEventListener('click', () => {
        if (icon.className === '') {
            icon.classList.add('open')
        } else {
            icon.classList.remove('open')
        }
    })
}
