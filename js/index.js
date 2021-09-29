/*  Selecting elements from the index.html  */
const taskForm = document.getElementById("task-form");
const taskName = document.getquerySelector("#task-name");
const taskAssignedTo = document.getquerySelector("#task-assignedto");
const taskDescription = document.getquerySelector("#task-description");
const taskDate = document.getquerySelector("#task-date");
const taskStatus = document.getquerySelector("#task-status");

/* Declaring variables to store form field values */
let nameData,
    descriptionData,
    taskAssignData,
    taskDateData,
    taskStatusData;
   

taskForm.addEventListener('submit', (e) => {
    
    e.preventDefault()
    
    checkInputs();
});
function checkInputs(taskName) {
    const nameData = taskName.value.trim()

     if(taskNameValue === ''){
       setErrorFor(taskName, 'Taskname cannot be blank')
    
    }else{
        setSuccessFor(taskName)
}}
function setErrorFor(input, message){
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';

}
function setSuccessFor(input){
    const formControl = input.parentElement; // .form-control
    formControl.taskName = 'form-control success';
}
