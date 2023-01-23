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
    const randomizer = document.getElementById('random');
    if(randomizer !== null)
        randomizer.addEventListener('click', ()=>{
            const random_content = document.getElementById("random-content") as HTMLElement;

            var type = (<HTMLInputElement>document.getElementById("types")).value;

            var elements = document.getElementsByClassName(type);

            if(elements.length === 0){
                random_content.innerHTML =
                    "<details class='min'> <summary>Found nothing</summary> " +
                    "</details>";
                return;
            }


            var rand = randomIntFromInterval(0, elements.length-1);

            random_content.innerHTML =
                "<details class='min'> " + elements[rand].innerHTML +
                "</details>";
        })
});


function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}