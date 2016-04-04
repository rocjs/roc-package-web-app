import rocjs from './files/rocjs.png';

function start() {
    var img = document.createElement('img');
    img.src = rocjs;

    document.getElementById('roc').appendChild(img);
    window.alert('Hello World');
}

start();
