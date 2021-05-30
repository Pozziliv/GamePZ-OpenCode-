window.onresize = function (){
    if (window.outerWidth != 485 || window.outerHeight != 765){
        window.resizeTo(485, 765);
    }
}

const exit = document.querySelector(".exit")

exit.addEventListener("click", function exit() {
    window.close();
});