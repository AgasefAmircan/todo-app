/*   Change Theme */
const themeBtn=document.querySelector('.theme-changer');
const themeIcon=document.querySelector('.theme-icon');

themeIcon.addEventListener('click', function(){
    if(document.documentElement.dataset.theme==='dark'){
        document.documentElement.dataset.theme='light';
        themeIcon.src='./images/icon-moon.svg'
    }
    else{
        document.documentElement.dataset.theme='dark';
        themeIcon.src='./images/icon-sun.svg'
    }
})

/*  Add Items  */
const AddTodo=document.querySelector('.add-todo');
const TodoBtn=document.querySelector('.add-todo button');
