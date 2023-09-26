
// checkBox.style.color = 'red';
// Color values goes here
let defaultTextColor =  '#AEBFD3';
let finishedTextColor = '#E93328';

const body = document.body;

let numTask = 0;

// const tasks = document.querySelector('.task')




// declare handler
function addCheckBoxEvent(checkBox, taskDescription){
    checkBox.addEventListener('change', function() {
        // console.log(taskDescription.innerHTML)
        if (this.checked) {
            taskDescription.style.color = finishedTextColor;
        }else{
            taskDescription.style.color = defaultTextColor;
        }
    })

}

function addDeleteTaskEvent(taskChild){
    taskChild.querySelector(".delete-task").addEventListener('click', function() {
        // console.log(taskDescription.innerHTML)
        let itemList = document.querySelector("#list-items")
        itemList.removeChild(taskChild)
        numTask--;

    })

}


// checkBoxes.addEventListener('change', function() {

//     if (this.checked) {
//         taskDesription.style.color = finishedTextColor;
//     }else{
//         taskDesription.style.color = defaultTextColor;
//     }
// })





const inputBoxPage = document.querySelector('#input-box-page')
const inputGui = document.querySelector('#input-gui')
const closeInputBox = document.querySelector('#close-input-box')

function showInputBox(){
    inputBoxPage.style.visibility = 'visible';
    inputGui.style.visibility = 'visible';
    closeInputBox.style.visibility = 'visible';

}
function hideInputBox(){
    inputBoxPage.style.visibility = 'hidden';
    inputGui.style.visibility = 'hidden';
    closeInputBox.style.visibility = 'hidden'; 
}


const taskInputField = document.querySelector('#task-input-field')

taskInputField.addEventListener("keypress", function(){

    if (event.key === "Enter"){

        let inputBox = document.querySelector('#task-input-field')
        

        if (numTask < 5){
            let taskDescription = document.querySelector('#task-input-field')
            let descriptionText = taskDescription.value;
    
            // console.log(descriptionText)
    
            addTask(descriptionText)
            hideInputBox()
            numTask++
            inputBox.value = " "

        }else{
            inputBox.value = "Finish some task first!"
        }
        

    }

}
)




function addTask(description){

    // Cloning a task
    let taskList = document.querySelector('#list-items');
    let task = document.querySelectorAll('.task');    
    let nexttask = task[0].cloneNode(true);

    let newTaskDescription = nexttask.querySelector(':scope > .task-description')
    let newTaskCheckBox = nexttask.querySelector(':scope > .task-checkbox')
    newTaskDescription.textContent = description;


    //Adding the check box event to it
    addCheckBoxEvent(newTaskCheckBox, newTaskDescription)

    //Adding delete task event
    addDeleteTaskEvent(nexttask)

    // Making it visible
    nexttask.style.visibility = 'visible';
    nexttask.style.cssText += "height: 10vh;";


    

    taskList.appendChild(nexttask);

}







