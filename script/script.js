let todoInputEl = document.querySelector('.input-todo');
let todoBtnEl = document.querySelector('.btn-todo');
let todoTaskEl = document.querySelector('.task-todo');
let todoFilterEl = document.querySelector('.filter-todo');
let todoBtn = todoBtnEl.addEventListener('click', addTask);
let change = todoTaskEl.addEventListener('click', changeBtn);

function addTask(e){
    //Prevent the default action
    e.preventDefault();
    //check empty line
    if(todoInputEl.value.length == 0){
        return;
    }

    //create <div></div> and add class
   let addEl = document.createElement('div');
   addEl.classList.add('content-todo');
     
    //create <li></li> and add class 
    let addLi = document.createElement('li');
    addLi.classList.add('item-todo');
    addLi.innerHTML = todoInputEl.value;
    addEl.appendChild(addLi);

    //create complete btn
    let completeBtn = document.createElement('button');
    completeBtn.classList.add('completeBtn-todo');
    completeBtn.innerHTML = '<i class="fas fa-check-circle"></i>';
    addEl.appendChild(completeBtn);

    //create remove btn
    let removeBtn = document.createElement('button');
     removeBtn.classList.add('removeBtn-todo');
    removeBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    addEl.appendChild(removeBtn);
    todoTaskEl.appendChild(addEl); 
    //clear input todo
    todoInputEl.value = '';
}
function changeBtn(event){
    let i = event.target;
    if(i.className == 'completeBtn-todo'){
        i.parentElement.classList.toggle('checkTask');
      
    }else if(i.className == 'removeBtn-todo'){
        i.parentElement.remove();
    }

}

