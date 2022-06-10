document.querySelector(".card__button").addEventListener("click", cambioValores);

function cambioValores(){
    const n = document.querySelector(".input__amount").value;
    const color = document.querySelector(".input__color").value;
    const total = (n*2199000);
    document.querySelector("#cantidad").innerHTML = n;
    document.querySelector("#total").innerHTML = total;   
    document.getElementById("color").style.backgroundColor = color;
}