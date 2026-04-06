let Button = document.querySelector("button");
let h1 = document.querySelector("h1");

let IbuttonClick = true;

Button.addEventListener("click", function () {

    if (IbuttonClick) {
        document.body.style.backgroundColor = "black";
        h1.innerText = "Lo Ho Gya Color Change";
        h1.style.color = "white";
        IbuttonClick = false;
    } else {
        document.body.style.backgroundColor = "white";
        h1.innerText = "Phir se button dabao black";
        h1.style.color = "black";
        IbuttonClick = true;
    }

});