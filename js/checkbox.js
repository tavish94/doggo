Util.events(document, {
    "DOMContentLoaded": function() {
        var tasks = document.getElementsByClassName("completed");
        for (var i = 0; i < tasks.length; i++) { 
            var currTask = tasks[i];
            currTask.classList.add("hide");
        }
        $(".new-task").click(function(evt) {
        })
    },


    "click": function(evt) {
        // console.log(evt)
        var x = evt.clientX;
        var y = evt.clientY;
        var task = document.elementsFromPoint(x, y);
        if (task[0].classList.contains("all")) {
            newClickedCompleted(task[0]);
        }
    },

});

var NUM_TASKS = 3;


function newCreateTask() {
    var card = document.createElement("a");
    card.href = "#";
    card.className = "new-task list-group-item list-group-item-action flex-column align-items-start new";

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

    var box = document.createElement("input");
    box.type = "checkbox";
    box.className = "all pull-right";
    box.style = "-webkit-transform: scale(1.7);"
    NUM_TASKS += 1;
    box.id = "check" + NUM_TASKS;

    div.appendChild(h5);
    div.appendChild(small);
    taskWrap.appendChild(div);
    p.append(box)
    taskWrap.appendChild(p);
    card.appendChild(taskWrap);


    document.getElementById("toDoList").appendChild(card);

}


function clickedCompleted(task) {
    var taskCard = task.parentNode;
    taskCard.parentNode.removeChild(taskCard);
    resetCompleted();
    moveCompletedTask(task.parentNode);
}



function newClickedCompleted(task) {
    var taskCard = task.parentNode;
    if (document.getElementById(task.id).checked) {
        taskCard.parentNode.parentNode.parentNode.removeChild(taskCard.parentNode.parentNode);
        document.getElementById("completedList").appendChild(taskCard.parentNode.parentNode);
        moveCompletedTask(task.parentNode.parentNode);
        taskCard.parentNode.parentNode.classList.remove("bg-danger");
        taskCard.parentNode.parentNode.classList.remove("text-white");
    }
    else {
        undoMove(task);
        moveCompletedTask(task.parentNode.parentNode);
    }
    
}

function undoMove(task) {
    var taskdiv = task.parentNode.parentNode.parentNode;
    taskdiv.parentNode.removeChild(taskdiv);
    document.getElementById('toDoList').appendChild(taskdiv);
    taskdiv.style.setProperty("background-color", "white");
}

function moveCompletedTask(task) {
    var clone = task.cloneNode(true);
    var elements = clone.getElementsByClassName("completed");
    task.parentNode.style.setProperty("background-color", "#f7f7f7");
}

function resetCompleted() {
    var openTasks = document.getElementsByClassName("completed");
    for (var i = 0; i < openTasks.length; i++) { 
        openTasks[i].classList.add("hide");
        openTasks[i].classList.remove("show");
    }
}

function changePicture(type) {
    console.log("here")
    var walkPic = document.getElementById("walk-pic")
    if (type == "day") {
        walkPic.src = "images/walk_day.png";
    }
    else if (type == "week") {
        walkPic.src = "images/walk_week.png";
    }
    else if (type == "month") {
        walkPic.src = "images/miles_week.png";
    }
}
