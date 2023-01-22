/*
     Website  ...: table tennis helper
     Author .....: Devdenn
     Date .......: 2023-01-22
*/

/* Wait for the DOM */
document.addEventListener("DOMContentLoaded", () => {
    console.log("yo");
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});
