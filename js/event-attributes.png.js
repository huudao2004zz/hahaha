function checkUsernam(){
    var elMsg = document.getElementById('feedback');
    var elUsernam = document.getElementById('usename');
    if (elUsernam.value.length < 5) {
        elMsg.textContent = 'Usenam must be 5 chracters or more';
    }else {
        elMsg.textContent = '';
    }
}
