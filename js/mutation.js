var ellist, addlink, newEl,nextText, counter, listItems;
ellist = document.getElementById('list');
addlink = document.querySelector('a');
counter = document.getElementById('counter');
 function  addItem(e) {
     e.preventDefault();
     newEl = document.createElement('li');
     newtext = document.createTextNode('New list item');
     newEl.appendChild(newtext);
     ellist.appendChild(newEl);
 }
 function updatecount(){
     listItems =ellist.getElementsByTagName('li').length;
     counter.innerHTML = listItems;
 }
 addlink.addEventListener('click', addItem,false);
 ellist.addEventListener('DOMNodeInserted', updatecount,false);