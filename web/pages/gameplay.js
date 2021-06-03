window.onresize = function (){
    if (window.outerWidth != 485 || window.outerHeight != 765){
        window.resizeTo(485, 765);
    }
};

const body = document.querySelector("body");
const sun = document.querySelectorClass("sun_main");
const moon = document.querySelectorClass("moon_main");
const airdrop = document.querySelectorClass("airdrop");
const bonus = document.querySelector(".bonus");
const life = document.querySelector(".lifeK");
const meal = document.querySelector(".mealK");
const points = document.querySelector(".pointsK")

let cycles = 0;
let lifePoints = 7;
let mealPoints = 7;
let pointsPoints = 7;

let lifeAdd = 1;
let lifeRemove = 1;
let mealAdd = 1;
let mealRemove = 1;
let pointsAdd = 1;
let pointsRemove = 1;

