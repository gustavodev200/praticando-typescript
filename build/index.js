"use strict";
const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");
let listSave = localStorage.getItem("@list_tasks");
let tasks = (listSave !== null && JSON.parse(listSave)) || [];
function getTasks() {
    listElement.innerHTML = "";
    tasks.map((item) => {
        let todoElement = document.createElement("li");
        let taskText = document.createTextNode(item);
        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        let position = tasks.indexOf(item);
        linkElement.setAttribute("onclick", `deleteTask(${position})`);
        linkElement.setAttribute("style", "margin-left: 10px;");
        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);
        todoElement.appendChild(taskText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    });
}
getTasks();
function addTasks() {
    if (inputElement.value === "") {
        alert("you not writed anything!");
        return false;
    }
    else {
        let typedTask = inputElement.value;
        tasks.push(typedTask);
        inputElement.value = "";
        getTasks();
        saveData();
    }
}
function deleteTask(position) {
    tasks.splice(position, 1);
    getTasks();
    saveData();
}
buttonElement.onclick = addTasks;
function saveData() {
    localStorage.setItem("@list_tasks", JSON.stringify(tasks));
}
