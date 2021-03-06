Util.events(document, {
    "DOMContentLoaded": function() {
        var tasks = document.getElementsByClassName("completed");
        for (var i = 0; i < tasks.length; i++) { 
            var currTask = tasks[i];
            currTask.classList.add("hide");
        } 
    },

    "click": function(evt) {
        var x = evt.clientX;
        var y = evt.clientY;
        var task = document.elementsFromPoint(x, y);
        if (task[0].classList.contains("all")) {
            newClickedCompleted(task[0]);
        }
    },

    "dblclick": function(evt) {
        var eventPath = evt.path;
        for (var i=0; i<eventPath.length; i++) {
            try {
                var task = eventPath[i];
                var taskClass = eventPath[i].classList;
                console.log(eventPath[i].classList)
                if (taskClass.contains("task-wrap")) {
                    console.log(task.children)
                    // var task = $(this)[0];
                    var notes = task.children[1];
                    var notes = task.children[1].innerHTML;
                    notes = notes.split("<input")

                    var editModal = $("#editModal")
                    $("#edit-notes")[0].value = notes[0];
                    editModal.modal('toggle');
                }
            }
            catch(err) {}
        }
    },

});

var NUM_TASKS = 3;

function newCreateTask() {
    var dayCalendar = {0:"Sunday", 1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 7:"Sunday"}
    var timed = new Date(document.getElementById("selected-time").value);
    var dayOfWeek = timed.getDay();

    NUM_TASKS += 1;

    var card = document.createElement("a");
    card.href = "#";
    card.className = "new-task list-group-item list-group-item-action flex-column align-items-start new";

    var taskWrap = document.createElement("div");
    taskWrap.className = "task-wrap";
    taskWrap.id = "task-" + NUM_TASKS;

    var div = document.createElement("div");
    div.className = "d-flex w-100 justify-content-between";

    var eventType = document.getElementById("eventType");
    var eventSelected = eventType.options[eventType.selectedIndex].value;
    console.log(eventSelected);

    var h5 = document.createElement("h5");
    h5.className = "mb-1";
    h5.innerHTML = eventSelected;

    var small = document.createElement("small");
    if (dayCalendar[dayOfWeek] != undefined) {
        small.innerHTML = "Due " + dayCalendar[dayOfWeek];
    }
    else {
        small.innerHTML = "Just Now";
    }
    small.style.setProperty("--position", "absolute");
    small.style.setProperty("--right", "0");

    var p = document.createElement("p");
    p.className = "mb-1";
    p.innerHTML = document.getElementById("notes").value;

    var box = document.createElement("input");
    box.type = "checkbox";
    box.className = "all pull-right";
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
        moveCompletedTask(task.parentNode.parentNode, true);
    }
    else {
        undoMove(task);
        moveCompletedTask(task.parentNode.parentNode, false);
    }  
}

function undoMove(task) {
    var taskdiv = task.parentNode.parentNode.parentNode;
    taskdiv.parentNode.removeChild(taskdiv);
    document.getElementById('toDoList').appendChild(taskdiv);

}

function moveCompletedTask(task, shade) {
    var clone = task.cloneNode(true);
    var elements = clone.getElementsByClassName("completed");
    if (shade) {
        task.parentNode.style.setProperty("background-color", "#f7f7f7");
    }
    else {
        task.parentNode.style.setProperty("background-color", "white");
    }
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
