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
let level = 1;
let lifePoints = 10;
let mealPoints = 10;
let pointsPoints = 10;

let lifeAdd = 1;
let lifeRemove = 1;
let mealAdd = 1;
let mealRemove = 1;
let pointsAdd = 1;
let pointsRemove = 1;

if (lifePoints <= 0 || mealPoints <= 0 || pointsPoints <= 0){
    
} else if (lifePoints >= 15){

} else if (mealPoints >= 15){

} else if (pointsPoints >= 15){

}

if (cycles % 12 == 0){
    lifePoints += 5;
    mealRemove += 5;
    pointsPoints += 5;
} else if (cycles % 7 == 0) {
    lifePoints += 3;
    mealRemove += 3;
    pointsPoints += 3;
}

if (cycles % 15 == 0){
    if (body.classList.contains("dayBody")){
        body.classList.remove("dayBody")
        body.classList.add("nightBody")
    } else {
        body.classList.remove("nightBody")
        body.classList.add("dayBody")
    }
}

if (cycles % 17 == 0 && level < 3) {
    level += 1;
    lifeAdd += 2;
    lifeRemove += 1;
    mealAdd += 1;
    mealRemove += 1;
    pointsAdd += 1.5;
    pointsRemove += 1;
}