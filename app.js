// Variables

const form = document.querySelector('#form-task');
const formInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks ');


// Run the function allEventListeners()

allEventListeners();


// Function allEventListeners()

function allEventListeners() {
   
    // Add task event  
    form.addEventListener('submit', addTask); 
    
    // Remove task event 
    taskList.addEventListener('click', removeTask); 
     
    // Clear all tasks
    clearBtn.addEventListener('click', clearAllTasks); 
    
}

// Function AddTaks 

function addTask(e) {
    
    // If there is no value, write a message
    if(task.value === '') {
        alert('Add a task'); 
    }
    
    // New li element 
    const li = document.createElement('li');

    // Adding a class
    li.className = 'colection-item';
    
    // Creating and appending text node to li element
    li.appendChild(document.createTextNode(formInput.value)); 
    
    // Creating a new link element 
    const link = document.createElement('a'); 
    
    // Adding a class inside the link element
    link.className = 'delete-item';
    
    // Adding the icon element 
    link.innerHTML = '<i class="fa fa-remove"></i>';
    
    // Apending the link to li 
    li.appendChild(link); 
    
    // Apending the link to li 
    taskList.appendChild(li); 
    
    // Clear input 
    formInput.value = '';
    
    
    e.preventDefault(); 
}


// Function Remove a Task

function removeTask(e) {
    
    if(e.target.parentElement.classList.contains('delete-item')) {
     
        if(confirm('Are you sure you want delete this?')){ 
        
            e.target.parentElement.parentElement.remove();  
        }
      }
    }


// Function Clear All Tasks 

function clearAllTasks() {
    
    taskList.innerHTML = '';
} 
