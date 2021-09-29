/*  Selecting elements from the index.html  */
const taskForm = document.getElementById("task-form");
const taskName = document.getElementById("task-name");
const taskAssignedTo = document.getElementById("task-assignedto");
const taskDescription = document.getElementById("task-description");
const taskDate = document.getElementById("task-date");
const taskStatus = document.getElementById("task-status");
const spanError = document.getElementsByClassName("err-task");

/* Declaring variables to store form field values */
// let taskName = nameData
let error = []
let validationFail = 0;

function errorMessageGenerator(parentElement, spanElement, errMessage ){ 
        spanElement.innerHTML = errMessage;
        spanElement.style.color = 'red';
        parentElement.style.border = '1px solid red';
}

function errorResetMessage(parentElement, spanElement, passMsg){
        spanElement.innerHTML = passMsg
        spanElement.style.color = 'green';
        parentElement.style.border = '1px solid black';
}


/* Applying event listeners on input fields */
taskForm.addEventListener('submit', (event) => {
    let formData = taskForm.value
    event.preventDefault()
    event.stopPropagation();
    console.log(validationFail)

    //validate the task name
    let nameData = taskName.value

    if (nameData.length < 5 ){
        spanElement = spanError[1];
        errMessage = ' Must contain atleast 5 letters'
        errorMessageGenerator(taskName, spanElement, errMessage);
    }else{
        spanElement = spanError[1];
        passMsg = ' Go to next point'
        errorResetMessage(taskName, spanElement, passMsg);
        validationFail ++
    }

    if (validationFail > 0) {
        console.log("inside")
        validationFail = 0;
        spanElement = spanError[0];
        errMessage = ' Required fields should be completed'
        errorMessageGenerator(taskForm, spanElement, errMessage);
      }
});

// taskName.addEventListener('focusout', () => {
//      let nameData = taskName.value

//     if (nameData.length < 5 ){
//         spanElement = spanError[1];
//         errMessage = ' Must contain atleast 5 letters'
//         errorMessageGenerator(taskName, spanElement, errMessage);
//     }else{
//         spanElement = spanError[1];
//         passMsg = ' Go to next point'
//         errorResetMessage(taskName, spanElement, passMsg);
//     }

// })   
// taskAssignedTo.addEventListener('focusout', () => {
//     let assignedToData = taskAssignedTo.value

//    if (assignedToData.length < 5 ){
//        spanElement = spanError[2];
//        errMsg = ' Please complete this field to continue. '
//        errorMessageGenerator(taskAssignedTo, spanElement, errMsg);
//    }else{
//        spanElement = spanError[2];
//        passMsg = ' Go to next point'
//        errorResetMessage(taskAssignedTo, spanElement, passMsg);
//    }

// })   
// taskDescription.addEventListener('focusout', () => {
//     let taskDescriptionData = taskDescription.value

//    if (taskDescriptionData.length < 5 ){
//        spanElement = spanError[3];
//        errMsg = ' Description is required. '
//        errorMessageGenerator(taskDescription, spanElement, errMsg);
//    }else{
//        spanElement = spanError[3];
//        passMsg = ' Go to next point'
//        errorResetMessage(taskDescription, spanElement, passMsg);
//    }

// }) 
// taskDate.onclick = () => {
//     let now = new Date();
//     let month = now.getMonth() + 1;
//     if (month < 10) {
//         month = "0" + month;
//     }
//     let currentDate = now.getFullYear() + "-" + month + "-" + now.getDate();
//     taskDate.setAttribute("min", currentDate);
// };  
// taskDate.addEventListener('focusout', () => {
//     let taskDateData = taskDate.value
    
//    if (!taskDateData){
      
//        spanElement = spanError[4];
//        errMsg = ' Must choose one date';
//        errorMessageGenerator(taskDate, spanElement, errMsg);
//    }else{
//        spanElement = spanError[4];
//        passMsg = ' Go to next point';
//        errorResetMessage(taskDate, spanElement, passMsg);
//    }

// })  
// taskStatus.addEventListener('focusout', () => {
//     let taskStatusData = taskStatus.value
   
//    if (taskStatusData === "Select..." ){
//        spanElement = spanError[5];
//        errMsg = ' Choose one option'
//        errorMessageGenerator(taskStatus, spanElement, errMsg);
//    }else{
//        spanElement = spanError[5];
//        passMsg = ' Good to go.'
//        errorResetMessage(taskStatus, spanElement, passMsg);
//    }

// })    
    
    


