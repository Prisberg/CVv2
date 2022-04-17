window.onload = function () {
    addListener();
}

function addListener() {
    window.addEventListener('click', enter)
}

function removeListener() {
    window.removeEventListener('click', enter)
}

function enter() {
    removeListener();

    const fullName = document.getElementsByClassName('partial')
    const name = document.getElementById('name')
    const click = document.getElementById('click')
    const entrance = document.getElementById('entrance')

    for (let i = 0; i < fullName.length; i++) {
        const element = fullName[i];
        element.classList.remove('is-hidden')
    }
    
    entrance.className = '';
    name.id = 'fullName';
    click.className = 'is-hidden';
    console.log(name)
}