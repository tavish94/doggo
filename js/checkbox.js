Util.events(document, {
    "DOMContentLoaded": function() {
        document.getElementById("check-all").addEventListener("click",  function(e) {
            console.log($("#checkboxId").prop('checked', true));
            if ($("#checkboxId").prop('checked', true)) {
                console.log("check all buttons");
                // document.getElementsByClassName("tasks").forEach(c => function(c) {    
                    // console.log("check all buttons")
                // });
            }
        });
    }
});