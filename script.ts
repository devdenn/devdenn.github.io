/*
     Website  ...: table tennis helper
     Author .....: Devdenn
     Date .......: 2023-01-22
*/
document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', ()=>{
        document.body.classList.toggle('dark');
    })
});