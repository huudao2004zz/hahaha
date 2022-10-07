function checkUsenam(){
    var elMsg = document.getElementById('feedback');
    if(this.value.length < 5) {
        elMsg.textContent = 'usename must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
    }
var elUsename = document.getElementById('username');
elUsename.onblur = checkUsenam;