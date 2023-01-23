/*
     Website  ...: table tennis helper
     Author .....: Devdenn
     Date .......: 2023-01-22
*/
document.addEventListener("DOMContentLoaded", function () {
    var checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', function () {
        document.body.classList.toggle('dark');
    });
    document.getElementById('random').addEventListener('click', function () {
        var random_content = document.getElementById("random-content");
        var elements = document.getElementsByClassName("min");
        var rand = randomIntFromInterval(0, elements.length - 1);
        random_content.innerHTML =
            "<details class='min'> " + elements[rand].innerHTML +
                "</details>";
    });
});
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
