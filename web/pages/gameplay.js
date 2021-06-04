window.onresize = function (){
    if (window.outerWidth != 485 || window.outerHeight != 765){
        window.resizeTo(485, 765);
    }
};

const body = document.querySelector("body");
const sun = document.querySelector(".sun_main");
const moon = document.querySelector(".moon_main");
const airdrop = document.querySelector(".airdrop");
const bonus = document.querySelector(".bonus");

let cycles = 1;
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

function checkPoints(){
    if (lifePoints <= 0 || mealPoints <= 0 || pointsPoints <= 0) {
        
    } else if (lifePoints >= 15) {
        
        levelUp();
    } else if (mealPoints >= 15) {

        levelUp();
    } else if (pointsPoints >= 15) {

        levelUp();
    }
    levelUp();
}

function airdropOrBonus(){
    if ((cycles % 12) == 0) {
        airdrop.classList.add("falldrop")
        lifePoints += 5;
        mealPoints += 5;
        pointsPoints += 5;
        document.getElementById("lifeK").textContent = lifePoints;
        document.getElementById("mealK").textContent = mealPoints;
        document.getElementById("pointsK").textContent = pointsPoints;
        dayOrNight();
    } else if ((cycles % 7) == 0) {
        bonus.classList.add("B_present")
        lifePoints += 3;
        mealPoints += 3;
        pointsPoints += 3;
        document.getElementById("lifeK").textContent = lifePoints;
        document.getElementById("mealK").textContent = mealPoints;
        document.getElementById("pointsK").textContent = pointsPoints;
        dayOrNight();
    }
    dayOrNight();
}

function dayOrNight(){
    if ((cycles % 15) == 0) {
        if (body.classList.contains("dayBody")){
            body.classList.remove("dayBody");
            body.classList.add("nightBody");
            sun.classList.remove("day");
            moon.classList.add("night");
            dayOrNight();
        } else {
            body.classList.remove("nightBody")
            body.classList.add("dayBody")
            sun.classList.add("day");
            moon.classList.remove("night");
            dayOrNight();
        }
    }
    dayOrNight();
}

function levelUp(){
    if ((cycles % 17) == 0 && level < 3) {
        level += 1;
        lifeAdd += 2;
        lifeRemove += 1;
        mealAdd += 1;
        mealRemove += 1;
        pointsAdd += 1.5;
        pointsRemove += 1;
        airdropOrBonus();
    }
    airdropOrBonus();
}

function lifeAddFunction() {
    cycles += 1;
    lifePoints += lifeAdd;
    pointsPoints -= pointsRemove;
    mealPoints -= mealRemove;
    document.getElementById("lifeK").textContent = lifePoints;
    document.getElementById("mealK").textContent = mealPoints;
    document.getElementById("pointsK").textContent = pointsPoints;
    checkPoints();
}

function mealAddFunction() {
    cycles += 1;
    lifePoints -= lifeRemove;
    pointsPoints -= pointsRemove;
    mealPoints += mealAdd;
    document.getElementById("lifeK").textContent = lifePoints;
    document.getElementById("mealK").textContent = mealPoints;
    document.getElementById("pointsK").textContent = pointsPoints;
    checkPoints();
}

function pointsAddFunction() {
    cycles += 1;
    lifePoints -= lifeRemove;
    pointsPoints += pointsAdd;
    mealPoints -= mealRemove;
    document.getElementById("lifeK").textContent = lifePoints;
    document.getElementById("mealK").textContent = mealPoints;
    document.getElementById("pointsK").textContent = pointsPoints;
    checkPoints();
}