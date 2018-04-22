Util.events(document, {
    "DOMContentLoaded": function() {
        var tasks = document.getElementsByClassName("completed");
        console.log(tasks)
        for (var i = 0; i < tasks.length; i++) { 
            var currTask = tasks[i];
            currTask.classList.add("hide");
        }
    },

    "click": function(evt) {
        var x = evt.clientX;
        var y = evt.clientY;
        var task = document.elementFromPoint(x, y);
        var taskClasses = task.className.split(" ");
        if (taskClasses.indexOf("new-task") >= 0) {

            var completed = task.getElementsByClassName("completed")[0];
            var completedClasses = completed.className.split(" ");

            if (completedClasses.indexOf("hide") >= 0) {
                resetCompleted();
                completed.classList.remove("hide");
                completed.classList.add("show");
            } 
            else {
                completed.classList.remove("show");
                completed.classList.add("hide");
            }
        }
        else if (taskClasses.indexOf("completed") >= 0) {
            clickedCompleted(task);
        }
        else {
            resetCompleted();
        }
    },

});

function createTask() {
    var card = document.createElement("a");
    card.href = "#";
    card.className = "new-task list-group-item list-group-item-action flex-column align-items-start";

    var taskWrap = document.createElement("div");
    taskWrap.className = "task-wrap";

    var div = document.createElement("div");
    div.className = "d-flex w-100 justify-content-between";

    var eventType = document.getElementById("eventType");
    var eventSelected = eventType.options[eventType.selectedIndex].value;
    console.log(eventSelected);

    var h5 = document.createElement("h5");
    h5.className = "mb-1";
    h5.innerHTML = eventSelected;

    var small = document.createElement("small");
    small.innerHTML = "just now";
    small.style.setProperty("--position", "absolute");
    small.style.setProperty("--right", "0");

    var p = document.createElement("p");
    p.className = "mb-1";
    p.innerHTML = document.getElementById("notes").value;


    var completed = document.createElement("div");
    completed.className = "completed hide";
    completed.innerHTML = "Completed"

    div.appendChild(h5);
    div.appendChild(small);
    taskWrap.appendChild(div);
    taskWrap.appendChild(p);
    card.appendChild(taskWrap);
    card.appendChild(completed);
    console.log(card);
    document.getElementById("toDoList").appendChild(card);
}


function clickedCompleted(task) {
    var taskCard = task.parentNode;
    taskCard.parentNode.removeChild(taskCard);
    resetCompleted();
    moveCompletedTask(task.parentNode);
}

function moveCompletedTask(task) {
    var clone = task.cloneNode(true);
    var elements = clone.getElementsByClassName("completed");
    clone.removeChild(elements[0]); 
    clone.style.setProperty("background-color", "#f7f7f7");
    document.getElementById("completedList").appendChild(clone);
}

function resetCompleted() {
    var openTasks = document.getElementsByClassName("completed");
    for (var i = 0; i < openTasks.length; i++) { 
        openTasks[i].classList.add("hide");
        openTasks[i].classList.remove("show");
    }
}