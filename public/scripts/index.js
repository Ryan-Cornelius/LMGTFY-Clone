let input = document.querySelector('#input');
let submit = document.querySelector('#submit');
let shortenDiv = document.querySelector('#shorten');
let URL = '';

submit.addEventListener('click', () => {
    if(input.value != ''){
        constructURL(input.value);
        shortenDiv.innerHTML = "<button id='shortenButton'> Shorten URL</button>";
    }
});

document.addEventListener('keydown', (event) => {
    if(event.keyCode === 13 && input.value != ''){
        constructURL(input.value);
        shortenDiv.innerHTML = "<button id='shortenButton'> Shorten URL</button>";
        document.querySelector('#shortenButton').addEventListener('click', () => {
            shortenURL(document.querySelector('p').innerText);
        });
    };
});

function constructURL(input){
    URL = window.location + input.replace(/ /ig, '+');
    document.querySelector('#outputURL').style.height = '30px';
    document.querySelector('#outputURL').style.paddingTop = '5px';
    document.querySelector('#outputURL').textContent = URL;
};

function shortenURL(input){
    let xhr = new XMLHttpRequest;
    xhr.open('POST', window.location, true);
    xhr.send(input);
}