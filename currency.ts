/*
     Website  ...: Currency Calculator
     Author .....: devdenn
     Date .......: 2022-11-09

     website for wbs
*/

let currency1: string;
let currency2: string;
let rate: number;

import * as fs from 'fs';

fs.readFile("db.json", "utf-8", (err, data) => {
    if (err) {
        console.log("error");
    } else {
        const dataJSON = JSON.parse(data);
        for (let i of dataJSON) {
            console.log(i.status);
        }
    }
});

function getCurrencies() {
    currency1 = (document.getElementById('currency1') as HTMLInputElement).value;
    currency2 = (document.getElementById('currency2') as HTMLInputElement).value;
    if(currency1 == "") currency1 = "Unknown";
    if(currency2 == "") currency2 = "Unknown";
}

function getRate() {
    rate = Number((document.getElementById('rate') as HTMLInputElement).value);
    rate = Number(rate.toFixed(4));
    (document.getElementById('rate') as HTMLOutputElement).value = rate.toString();
}

function swap(event) {
    event.preventDefault();

    getCurrencies();
    (document.getElementById("currency1") as HTMLOutputElement).value = currency2;
    (document.getElementById("currency2") as HTMLOutputElement).value = currency1;

    getRate();
    if(rate !== 0) {
        rate = 1 / rate;
        rate = Number(rate.toFixed(4));
        (document.getElementById('rate') as HTMLOutputElement).value = rate.toString();
    }

    calc(event);
}

function calc(event) {
    event.preventDefault();

    getCurrencies();
    getRate();

    let table1, table2, table3: string;
    table1 = "";
    table2 = "";
    table3 = "";

    for (let i = 1; i <= 10; i++) {
        table1 = table1 + `
        <tr class="ten">
            <td>${i.toFixed(2)}</td>
            <td>${(i*rate).toFixed(2)}</td>
        </tr>`
    }
    for (let i = 10; i <= 100; i=i+10) {
        table2 = table2 + `
        <tr class="hundred">
            <td>${i.toFixed(2)}</>
            <td>${(i*rate).toFixed(2)}</td>
        </tr>`
    }
    for (let i = 100; i <= 1000; i=i+100) {
        table3 = table3 + `
        <tr class="thousand">
            <td>${i.toFixed(2)}</td>
            <td>${(i*rate).toFixed(2)}</td>
        </tr>`
    }

    document.getElementById('table').innerHTML=`
    <table class="t">
        <tr>
            <th>${currency1}</th>
            <th>${currency2}</th>
        </tr>
        ` + table1 + `
    </table>
    <table class="t">
        <tr>
            <th>${currency1}</th>
            <th>${currency2}</th>
        </tr>
        ` + table2 + `
    </table>
    <table class="t">
        <tr>
            <th>${currency1}</th>
            <th>${currency2}</th>
        </tr>
        ` + table3 + `
    </table>`;
}

/* Wait for the DOM */
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('swap').addEventListener('click', (event) => {
        swap(event);
    })
    document.getElementById('calc').addEventListener('click', (event) => {
        calc(event);
    });
});