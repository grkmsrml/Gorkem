// DOM elements
let navItems = document.getElementsByClassName('nav');
let resume = document.getElementsByClassName('workbench');
let textBoxes = document.getElementsByClassName('navbox');
let button = document.getElementById('button');

// Set inner HTML
Array.from(resume).forEach(item => {
    item.innerHTML = '<p> selamlar </p>';
});
Array.from(textBoxes).forEach(item => {
    item.innerHTML = '<p> selamlar </p>';
});

// Functions
function changeImage() {
    let image = document.getElementById('image');
    let newImageSource = 'projeresim/sinop.jpg';
    image.setAttribute('src', newImageSource);
    image.setAttribute('alt', 'New image Alt Text');
}

function makeItalic() {
    let element = document.getElementById('ankara');
    element.classList.add('italic');
}

function createNewSection() {
    let newSection = document.createElement('div');
    newSection.classList.add('new-section');
    newSection.textContent = 'Firindan taze taze div';
    document.body.appendChild(newSection);
}

button.addEventListener('click', function(e) {
    console.log('Button clicked!', e);
});

function sheepCounter() {
    for (let i = 1; i <= 3; i++) {
        alert("Çitleden atlayan koyun sayısı " + i);
    }
}

function hideShow() {
    let element = document.getElementById('photo');
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
