var array = [];

function add(num) {
    array.push(num);
    document.getElementById("preview").innerText = array.toString().replace(/,/g, "");
}

function solve() {
    var string = array.toString().replace(/,/g, "");
    var answer = eval(string);
    if(Number.isFinite(answer)) {
    document.getElementById("display").innerText = answer;
    array = [answer];
    } else {
        document.getElementById("display").innerText = "undefined";
    }
    document.getElementById("display").style.color = "white";
}

empty = () => {
    array = [];
    document.getElementById("display").innerText = "0";
    document.getElementById("preview").innerText = "";
    document.getElementById("display").style.color = "chocolate";
}