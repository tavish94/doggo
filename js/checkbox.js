Util.events(document, {
    "DOMContentLoaded": function() {
        document.getElementById("check-all").addEventListener("click",  function(e) {
            if ($("#checkboxId").prop('checked', true)) {
                var tasks = document.getElementsByClassName("new-task");
                for (var i = 0; i < tasks.length; i++) { 
                    console.log(tasks[i])
                    tasks[i].style.setProperty()
                }
            }
        });

        // $("walk-card").on("click", function(){
        //     var modalOpen = $("#dataModal").hasClass('in');
        //     if (modalOpen) {
        //         $("#dataModal").modal("hide");
        //     }
        //     else {
        //         $("#dataModal").modal("show");
        //     }
        // });


    },

    // "click": function(evt) {
    //     var modalOpen = $("#dataModal").hasClass('in');
    //     if (modalOpen) {
    //         $("#dataModal").modal("hide");
    //     }
    // }
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


