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
});
