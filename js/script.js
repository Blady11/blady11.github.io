// add item by click    

function add(){
   
   var name = document.querySelector('#name'),
       add = document.querySelector('#add'),
       li = document.createElement('li'),
       ul = document.querySelector('.list-items'),
       text = document.querySelector('#name').value,
       span = document.createElement('span'),
       txt = document.createTextNode('\u00D7'),
       number = 0,
       deleteAll = document.querySelector('#delete-all'),
       taskList = document.getElementsByClassName('list-item'),
       number = taskList.length,
       allItems = document.getElementsByClassName('complete'),
       completeNumber = allItems.length,
       btnDel = document.querySelector('#delete-complete');
    
    if (typeof text == 'undefined' || !text || text.length === 0 || text === "" || !/[^\s]/.test(text) || /^\s*$/.test(text) || text.replace(/\s/g,"") === "" || !text.match(/^[A-Za-z1-9\s+]+$/) || /[^\x00-\x7F]+/.test(text)){
        alert("You have to provide name");
    }
    
    else {
        document.querySelector('.list-items').appendChild(li);
        number++;
        document.querySelector('.number').innerHTML =" "+number;
    }
    
    if (number > 1){
        deleteAll.style.display = 'block';
    }
    
    else {
        deleteAll.style.display = 'none';
    }
    
    if (completeNumber > 1){
                 btnDel.style.display = 'block';
                 }
    else {
                btnDel.style.display = 'none';
                }
        
    
    li.className = "list-item";
    li.innerHTML = text;
    span.className = 'remove';
    span.appendChild(txt);
    li.appendChild(span);
    
    document.querySelector('#name').value = "";
    
    
}

// add item by enter

function pressed(e){
    if(e.keyCode === 13)
        add();
        }

document.querySelector('#add').addEventListener('click', add);
document.querySelector('#name').addEventListener('keypress', pressed);

// remove item

document.addEventListener('click', removeItem);

function removeItem(){
     
    var taskList = document.getElementsByClassName('list-item'),
        deleteAll = document.querySelector('#delete-all'),
        number = taskList.length,
        remove = document.getElementsByClassName('remove'),
        completeItems = document.getElementsByClassName('complete'),
        completeNumber = completeItems.length;
    
    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function remove() {
            var taskItem = this.parentElement;
            taskItem.remove();
            number--;
            document.querySelector('.number').innerHTML =" "+ number;
            if (taskItem.classList.contains('complete')){
            completeNumber--;
            document.querySelector('.complete-number').innerHTML =" "+ completeNumber;
            }
             if (number > 1){
                 deleteAll.style.display = 'block';
                 }
            else {
                deleteAll.style.display = 'none';
                }
            }
        }
    }
// delete all function


document.querySelector('#delete-all').addEventListener('click', deleteAll);

function deleteAll(){
    
    var taskList = document.getElementsByClassName('list-item'),
        number = taskList.length,
        deleteAll = document.querySelector('#delete-all'),
        ul = document.querySelector('.list-items'),
        btnDel = document.querySelector('#delete-complete');
    
    while (ul.hasChildNodes()) {
    ul.removeChild(ul.lastChild);
        }
    
    document.querySelector('.number').innerHTML = " "+0;
    document.querySelector('.complete-number').innerHTML =" "+0;
    
    deleteAll.style.display = 'none';
    btnDel.style.display = 'none';
}


// delete completed function

document.querySelector('#delete-complete').addEventListener('click', deleteAllComplete);

function deleteAllComplete() {
    
    var completeList = document.getElementsByClassName('complete'),
        taskList = document.getElementsByClassName('list-item'),
        number = completeList.length,
        numberTask = taskList.length,
        deleteAll = document.querySelector('#delete-complete'),
        deleteAllBtn = document.querySelector('#delete-all'),
        ul = document.querySelector('.list-items'),
        taskList = document.getElementsByClassName('list-item'),
        numberTask = taskList.length,
        allItems = document.getElementsByClassName('complete'),
        completeNumber = allItems.length,
        btnDel = document.querySelector('#delete-complete');
    
   for (i=0; i < number; i++){
       document.querySelector('.complete').remove();
       if (number == numberTask){
                 deleteAllBtn.style.display = 'none';
                 }
            else {
                deleteAllBtn.style.display = 'block';
                }
   }
   
    
    
    btnDel.style.display = 'none';
               
    
    document.querySelector('.complete-number').innerHTML =" "+0;
    if (number>0)
    document.querySelector('.number').innerHTML = " "+ numberTask - number;
    
    
}

// mark completed task function

document.querySelector('.list-items').addEventListener('click', complete, false);

function complete(ev) {
    
    var allItems = document.getElementsByClassName('complete'),
        completeNumber = allItems.length,
        btnDel = document.querySelector('#delete-complete');
    
    
    if (ev.target.classList.contains('list-item')) {
        ev.target.classList.toggle('complete');
        if (ev.target.classList.contains('complete')){completeNumber++;}
        else completeNumber--;
        document.querySelector('.complete-number').innerHTML =" "+ completeNumber;
        }
    
    if (completeNumber > 1){
                 btnDel.style.display = 'block';
                 }
    else {
                btnDel.style.display = 'none';
                }
    }


// jquery style border of LI

/*$(document).ready(function() {
  $('.remove').hover(function() {
    $('.remove').css({
        'background-color': 'black',
    });
  
  });
});
*/