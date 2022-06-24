/*   Change Theme */
const themeIcon = document.querySelector(".theme-icon");

themeIcon.addEventListener("click", function () {
  if (document.documentElement.dataset.theme === "light") {
    document.documentElement.dataset.theme = "dark";
    themeIcon.src = "./images/icon-sun.svg";
  } else {
    document.documentElement.dataset.theme = "light";
    themeIcon.src = "./images/icon-moon.svg";
  }
});

/*  Add Items  */
const addTodo = document.querySelector('.add-todo input');  
const todoBtn = document.querySelector('.add-todo button'); 
const todoList = document.querySelector('.todo-list ul'); 
const itemId = document.querySelector('.filters input[type="radio"]:checked');

todoBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (addTodo.value.length > 0) {
    addItems(addTodo.value);
    addTodo.value = '';
  }
})

function addItems(text) {
  const item = document.createElement('li');
  item.innerHTML = 
  `
  <label class="list">
  <input class="checkbox" type="checkbox" />
  <span class="text">${text}</span>
  <span class="remove"></span>
  </label>
  
  `;

  if (itemId.id === 'completed') {
    item.classList.add('hidden');
  }
  todoList.append(item);
  updateCount(1);
}

/* Count items */
const mobileCount = document.querySelector('.mobile-count span');
const itemCount = document.querySelector('.count span');

mobileCount.innerText = document.querySelectorAll('.list').length;
itemCount.innerText = document.querySelectorAll('.list').length;

function updateCount(num) {
  itemCount.innerText=+itemCount.innerText+num;
}

  /*Remove items  */
  function removeItems(item){
    item.remove();
   updateCount(-1);
  }
  todoList.addEventListener('click',(e) =>{
    if(e.target.classList.contains('remove')){
        removeItems(e.target.parentElement.parentElement);
    }
  })

  /*Filters */
  document.querySelectorAll('.filters input').forEach(radio =>{
    radio.addEventListener('change',(e) =>{
        filterTodo(e.target.id);
    })
  })

  function filterTodo(id){
    const allItems=document.querySelectorAll('li');

    switch(id){
        case 'all':
            allItems.forEach(item =>{
                item.classList.remove('hidden');
            })
            break;
            case 'active':
                allItems.forEach(item =>{
                    if(item.querySelector('input').checked){
                        item.classList.add('hidden')
                    }
                    else{
                        item.classList.remove('hidden')
                    }
                })
                break;
                default:
                    allItems.forEach(item =>{
                        if(item.querySelector('input').checked){
                            item.classList.remove('hidden')
                        }
                        else{
                            item.classList.add('hidden')
                        }
                    })
                    break;
    }
  }

     /*  Clear Items    */
     const clear=document.querySelector('.clear');
     const mobileClear=document.querySelector('.mobile-clear');

     clear.addEventListener('click', () =>{
        const itemChecked=document.querySelectorAll('.list input[type="checkbox"]:checked');
        itemChecked.forEach(item=>{
            removeItems(item.closest('li'));
        })
     })
     mobileClear.addEventListener('click', () => {
        const itemChecked=document.querySelectorAll('.list input[type="checkbox"]:checked');
        itemChecked.forEach(item=>{
            removeItems(item.closest('li'));
        })
     })