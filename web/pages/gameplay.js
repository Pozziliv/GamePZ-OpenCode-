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
let PointsInf = 0;
let MealInf = 0;
let LifeInf = 0;

function checkPoints(){
    if (lifePoints <= 0 || mealPoints <= 0 || pointsPoints <= 0) {
        document.location.href = "finish.html";
    }
    dayOrNight();
}

function airdropOrBonus(){
    if ((cycles % 12) == 0) {
        airdrop.classList.add("falldrop");
        lifePoints += 3.5;
        mealPoints += 3.5;
        pointsPoints += 3.5;
        document.getElementById("lifeK").textContent = lifePoints;
        document.getElementById("mealK").textContent = mealPoints;
        document.getElementById("pointsK").textContent = pointsPoints;
    } else if ((cycles % 7) == 0) {
        bonus.classList.add("B_present");
        lifePoints += 2;
        mealPoints += 2;
        pointsPoints += 2;
        document.getElementById("lifeK").textContent = lifePoints;
        document.getElementById("mealK").textContent = mealPoints;
        document.getElementById("pointsK").textContent = pointsPoints;
    } else {
        bonus.classList.remove("B_present");
        airdrop.classList.remove("falldrop");
    }
    levelUp();
}

function dayOrNight(){
    if ((cycles % 15) == 0) {
        if (body.classList.contains("dayBody")){
            body.classList.remove("dayBody");
            body.classList.add("nightBody");
            sun.classList.remove("day");
            moon.classList.add("night");
        } else {
            body.classList.remove("nightBody")
            body.classList.add("dayBody")
            sun.classList.add("day");
            moon.classList.remove("night");
        }
    }
}

function levelUp(){
    if ((cycles % 17) == 0 && level < 3) {
        level += 1;
        lifeAdd += 2;
        lifeRemove += 2.5;
        mealAdd += 1;
        mealRemove += 2;
        pointsAdd += 1.5;
        pointsRemove += 2;
    }
    checkPoints();
}

function lifeAddFunction() {
    cycles += 1;
    if (LifeInf > 0) {
        cycles -= 1;
        document.getElementById("lifeK").textContent = lifePoints;
        document.getElementById("mealK").textContent = mealPoints;
        document.getElementById("pointsK").textContent = pointsPoints;
        airdropOrBonus();
    } else if ((lifePoints + lifeAdd) > 15) {
        lifePoints = 15;
    } else {
        lifePoints += lifeAdd;
    };
    if (PointsInf == 0 && pointsPoints >= 15){
        pointsPoints = 15;
        PointsInf = 1;
    }else if (PointsInf > 0) {
        PointsInf -= 1;
        pointsPoints -= 1;
    } else {
        pointsPoints -= pointsRemove;
    };
    if (MealInf == 0 && mealPoints >= 15){
        mealPoints = 15;
        MealInf = 1;
    }else if (MealInf > 0) {
        MealInf -= 1;
        mealPoints -= 1;
    } else {
        mealPoints -= mealRemove;
    };
    document.getElementById("lifeK").textContent = lifePoints;
    document.getElementById("mealK").textContent = mealPoints;
    document.getElementById("pointsK").textContent = pointsPoints;
    airdropOrBonus();
}

function mealAddFunction() {
    cycles += 1;
    if (MealInf > 0) {
        cycles -= 1;
        document.getElementById("lifeK").textContent = lifePoints;
        document.getElementById("mealK").textContent = mealPoints;
        document.getElementById("pointsK").textContent = pointsPoints;
        airdropOrBonus();
    } else if ((mealPoints + mealAdd) > 15) {
        mealPoints = 15;
    } else {
        mealPoints += mealAdd;
    };
    if (LifeInf == 0 && lifePoints >= 15){
        lifePoints = 15;
        LifeInf = 1;
    }else if (LifeInf > 0) {
        LifeInf -= 1;
        lifePoints -= 1;
    } else {
        lifePoints -= lifeRemove;
    };
    if (PointsInf == 0 && pointsPoints >= 15){
        pointsPoints = 15;
        PointsInf = 1;
    }else if (PointsInf > 0) {
        PointsInf -= 1;
        pointsPoints -= 1;
    } else {
        pointsPoints -= pointsRemove;
    };
    document.getElementById("lifeK").textContent = lifePoints;
    document.getElementById("mealK").textContent = mealPoints;
    document.getElementById("pointsK").textContent = pointsPoints;
    airdropOrBonus();
}

function pointsAddFunction() {
    cycles += 1;
    if (PointsInf > 0) {
        cycles -= 1;
        document.getElementById("lifeK").textContent = lifePoints;
        document.getElementById("mealK").textContent = mealPoints;
        document.getElementById("pointsK").textContent = pointsPoints;
        airdropOrBonus();
    } else if ((pointsPoints + pointsAdd) > 15) {
        pointsPoints = 15;
    } else {
        pointsPoints += pointsAdd;
    };

    if (LifeInf == 0 && lifePoints >= 15){
        lifePoints = 15;
        LifeInf = 1;
    }else if (LifeInf > 0) {
        LifeInf -= 1;
        lifePoints -= 1;
    } else {
        lifePoints -= lifeRemove;
    };
    
    if (MealInf == 0 && mealPoints >= 15){
        mealPoints = 15;
        MealInf = 1;
    }else if (MealInf > 0) {
        MealInf -= 1;
        mealPoints -= 1;
    } else {
        mealPoints -= mealRemove;
    };
    document.getElementById("lifeK").textContent = lifePoints;
    document.getElementById("mealK").textContent = mealPoints;
    document.getElementById("pointsK").textContent = pointsPoints;
    airdropOrBonus();
}