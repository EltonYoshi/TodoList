const input = document.getElementById("input-task");
const container = document.getElementById("container-tasks");


function createBtnDelete(){
    let btnDelete = document.createElement("button");
    let iconDelete = document.createElement("i");


    iconDelete.setAttribute("class", "fa-solid fa-circle-xmark");
    btnDelete.appendChild(iconDelete);
    btnDelete.setAttribute("class", "btn-delete");

    btnDelete.addEventListener("click", taskDelete);

    return btnDelete;
}


function createBtnCheck(){
    let btnCheck = document.createElement("button");
    let iconCheck = document.createElement("i");

    iconCheck.setAttribute("class", "fa-solid fa-check");
    btnCheck.appendChild(iconCheck);

    btnCheck.setAttribute("class", "btn-check");

    btnCheck.addEventListener("click", taskCheck)
    return btnCheck;
}

let taskDelete = function(btnDelete){

    let del = btnDelete.target;
    let tarefa = del.parentElement.parentElement;
    tarefa.remove();
}

let taskCheck = function(btnCheck){
    let check = btnCheck.target;
    let tarefaConcluida = check.parentElement.parentElement;
    tarefaConcluida.children[0].setAttribute("class", "concluido");
}


function addTask(){
    let taskContainer = document.createElement("div");
    let task = document.createElement("p");
    task.innerHTML= input.value;

    taskContainer.setAttribute("class", "task-container");
    
    
    task.setAttribute("class", "task");

    container.appendChild(taskContainer);

    taskContainer.appendChild(task);

    taskContainer.appendChild(createBtnCheck());
    taskContainer.appendChild(createBtnDelete());
    
}



    
