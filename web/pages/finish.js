window.onresize = function (){
    if (window.outerWidth != 485 || window.outerHeight != 765){
        window.resizeTo(485, 765);
    }
};

let cycles = parseInt(localStorage.getItem("cycles"));

document.getElementById("cycles").textContent = cycles;

if (parseInt(localStorage.getItem("record"))) {
    record = parseInt(localStorage.getItem("record"));
    if (record >= cycles) {
        document.getElementById("Record").textContent = record; 
    } else {
        record = cycles;
        localStorage.setItem("record", record);
        document.getElementById("Record").textContent = record;
    }
} else {
    record = parseInt(localStorage.getItem("cycles"));
    localStorage.setItem("record", record);
    document.getElementById("Record").textContent = record;
}


function mainMenu(){
    window.location.replace("../Index.html");
};