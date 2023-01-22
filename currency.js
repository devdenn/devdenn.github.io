"use strict";
/*
     Website  ...: Currency Calculator
     Author .....: devdenn
     Date .......: 2022-11-09

     website for wbs
*/
Object.defineProperty(exports, "__esModule", { value: true });
var currency1;
var currency2;
var rate;
var fs = require("fs");
fs.readFile("db.json", "utf-8", function (err, data) {
    if (err) {
        console.log("error");
    }
    else {
        var dataJSON = JSON.parse(data);
        for (var _i = 0, dataJSON_1 = dataJSON; _i < dataJSON_1.length; _i++) {
            var i = dataJSON_1[_i];
            console.log(i.status);
        }
    }
});
function getCurrencies() {
    currency1 = document.getElementById('currency1').value;
    currency2 = document.getElementById('currency2').value;
    if (currency1 == "")
        currency1 = "Unknown";
    if (currency2 == "")
        currency2 = "Unknown";
}
function getRate() {
    rate = Number(document.getElementById('rate').value);
    rate = Number(rate.toFixed(4));
    document.getElementById('rate').value = rate.toString();
}
function swap(event) {
    event.preventDefault();
    getCurrencies();
    document.getElementById("currency1").value = currency2;
    document.getElementById("currency2").value = currency1;
    getRate();
    if (rate !== 0) {
        rate = 1 / rate;
        rate = Number(rate.toFixed(4));
        document.getElementById('rate').value = rate.toString();
    }
    calc(event);
}
function calc(event) {
    event.preventDefault();
    getCurrencies();
    getRate();
    var table1, table2, table3;
    table1 = "";
    table2 = "";
    table3 = "";
    for (var i = 1; i <= 10; i++) {
        table1 = table1 + "\n        <tr class=\"ten\">\n            <td>".concat(i.toFixed(2), "</td>\n            <td>").concat((i * rate).toFixed(2), "</td>\n        </tr>");
    }
    for (var i = 10; i <= 100; i = i + 10) {
        table2 = table2 + "\n        <tr class=\"hundred\">\n            <td>".concat(i.toFixed(2), "</>\n            <td>").concat((i * rate).toFixed(2), "</td>\n        </tr>");
    }
    for (var i = 100; i <= 1000; i = i + 100) {
        table3 = table3 + "\n        <tr class=\"thousand\">\n            <td>".concat(i.toFixed(2), "</td>\n            <td>").concat((i * rate).toFixed(2), "</td>\n        </tr>");
    }
    document.getElementById('table').innerHTML = "\n    <table class=\"t\">\n        <tr>\n            <th>".concat(currency1, "</th>\n            <th>").concat(currency2, "</th>\n        </tr>\n        ") + table1 + "\n    </table>\n    <table class=\"t\">\n        <tr>\n            <th>".concat(currency1, "</th>\n            <th>").concat(currency2, "</th>\n        </tr>\n        ") + table2 + "\n    </table>\n    <table class=\"t\">\n        <tr>\n            <th>".concat(currency1, "</th>\n            <th>").concat(currency2, "</th>\n        </tr>\n        ") + table3 + "\n    </table>";
}
/* Wait for the DOM */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('swap').addEventListener('click', function (event) {
        swap(event);
    });
    document.getElementById('calc').addEventListener('click', function (event) {
        calc(event);
    });
});
//# sourceMappingURL=currency.js.map