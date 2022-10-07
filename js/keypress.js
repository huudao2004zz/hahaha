var el;
function charCount (e){
    var textEnter, charDisplay, couter ,lastkey;
    textEntred = document.getElementById('latskey');
    lastkey.textContent = 'last key in ASCII code: '+ e.keyCode;
}
el = document.getElementById('message');
el.addEventListener('keyup', charCount, false);