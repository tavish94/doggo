Util.events(document, {
    "DOMContentLoaded": function() {
        var tasks = document.getElementsByClassName("completed");
        for (var i = 0; i < tasks.length; i++) { 
            tasks[i].classList.add("hide");
        }
    },

    "click": function(evt) {
        var x = evt.clientX;
        var y = evt.clientY;
        var task = document.elementFromPoint(x, y);
        var taskClasses = task.className.split(" ");
        console.log(taskClasses)
        if (taskClasses.indexOf("new-task") >= 0) {

            var completed = task.getElementsByClassName("completed")[0];
            var completedClasses = completed.className.split(" ");

            if (completedClasses.indexOf("hide") >= 0) {
                var openTasks = document.getElementsByClassName("completed");
                for (var i = 0; i < openTasks.length; i++) { 
                    openTasks[i].classList.add("hide");
                    openTasks[i].classList.remove("show");
                }
                completed.classList.remove("hide");
                completed.classList.add("show");
            } 
            else {
                console.log("add")
                completed.classList.remove("show");
                completed.classList.add("hide");
            }
        }
    },

});

function createTask() {
    var card = document.createElement("a");
    card.href = "#";
    card.className = "new-task list-group-item list-group-item-action flex-column align-items-start";
    var div = document.createElement("div");
    div.className = "d-flex w-100 justify-content-between";
    var h5 = document.createElement("h5");
    h5.className = "mb-1";
    var eventType = document.getElementById("eventType");
    var eventSelected = eventType.options[eventType.selectedIndex].value;
    console.log(eventSelected);
    h5.innerHTML = eventSelected;
    var small = document.createElement("small");
    small.innerHTML = "just now";
    var p = document.createElement("p");
    p.className = "mb-1";
    p.innerHTML = document.getElementById("notes").value;
    div.appendChild(h5);
    div.appendChild(small);
    card.appendChild(div);
    card.appendChild(p);
    console.log(card);
    document.getElementById("toDoList").appendChild(card);
}


