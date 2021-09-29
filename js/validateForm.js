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
let error = [];
let validateFlag = 0;

function errorMessageGenerator(parentElement, spanElement, errMessage) {
  spanElement.innerHTML = errMessage;
  spanElement.style.color = "red";
  parentElement.style.border = "1px solid red";
}

function errorResetMessage(parentElement, spanElement, passMsg) {
  spanElement.innerHTML = passMsg;
  spanElement.style.color = "green";
  parentElement.style.border = "1px solid black";
}

/* Applying event listeners on input fields */
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();

  //validate the task name
  if (taskName.value.length < 5) {
    spanElement = spanError[1];
    errMessage = " Must contain atleast 5 letters";
    errorMessageGenerator(taskName, spanElement, errMessage);
  } else {
    spanElement = spanError[1];
    passMsg = " Go to next point";
    errorResetMessage(taskName, spanElement, passMsg);
    validateFlag++;
  }

  // validate assigned To
  if (taskAssignedTo.value.length < 5) {
    spanElement = spanError[2];
    errMsg = " Please complete this field to continue. ";
    errorMessageGenerator(taskAssignedTo, spanElement, errMsg);
  } else {
    spanElement = spanError[2];
    passMsg = " Go to next point";
    errorResetMessage(taskAssignedTo, spanElement, passMsg);
    validateFlag++;
  }

  // validate Description
  if (taskDescription.value.length < 5) {
    spanElement = spanError[3];
    errMsg = " Description is required. ";
    errorMessageGenerator(taskDescription, spanElement, errMsg);
  } else {
    spanElement = spanError[3];
    passMsg = " Go to next point";
    errorResetMessage(taskDescription, spanElement, passMsg);
    validateFlag++;
  }

  //validate date
  if (taskDate.value === "") {
    spanElement = spanError[4];
    errMsg = " Must choose one date";
    errorMessageGenerator(taskDate, spanElement, errMsg);
  } else {
    spanElement = spanError[4];
    passMsg = " Go to next point";
    errorResetMessage(taskDate, spanElement, passMsg);
    validateFlag++;
  }

  // validate status
  if (taskStatus.value === "Select...") {
    spanElement = spanError[5];
    errMsg = " Choose one option";
    errorMessageGenerator(taskStatus, spanElement, errMsg);
  } else {
    spanElement = spanError[5];
    passMsg = " Good to go.";
    errorResetMessage(taskStatus, spanElement, passMsg);
    validateFlag++;
  }
  console.log(validateFlag);

  if (validateFlag >= 5) {
    validateFlag = 0;
    errMessage = "";
    spanElement = spanError[0];
    errorMessageGenerator(taskForm, spanElement, errMessage);
    // call addTask function here
    // reset the form
    taskForm.reset();
  } else {
    validateFlag = 0;
    spanElement = spanError[0];
    errMessage = " Required fields should be completed";
    errorMessageGenerator(taskForm, spanElement, errMessage);
  }
});
