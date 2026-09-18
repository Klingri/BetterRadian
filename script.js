const navBar = document.querySelector('.TopBar');

function createNavButton(text, url) {
    const btn = document.createElement('a');
    btn.innerText = text;
    btn.className = 'button';
    btn.href = url;

    navBar.appendChild(btn);
    return btn;
}

// Now creating a button takes just one clean line:
createNavButton('BTRadian GitHub', 'https://github.com/Klingri/BetterRadian');
createNavButton('BTRadian Update', 'https://github.com/Klingri/BetterRadian/releases');
createNavButton('Vortex', 'https://playvortex.io/');

const alerts = document.querySelector('.navbar-actions', '.navbar-pill-btn', 'vpro-nav-btn', 'btn-secondary');
alerts.addEventListener('click', function () {
    alert("Are you sure you want to click this button?");
});

const navLogo = document.querySelector('.TopBar');
const navText = document.createElement('h6');

navText.innerText = 'BetterRadian v1.0';
navText.className = 'button';
navText.style.color = '#FFF';
navLogo.appendChild(navText);

const body = document.querySelector('.home-body')
const box = document.createElement('div');
box.innerText = 'Notice';
box.className = 'button';
body.appendChild(box);