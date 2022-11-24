function getScore (event) {
    var score = document.querySelector("input[name='score']:checked").value;
    document.querySelector("p.you-selected-line").innerHTML = "You selected " + score + " out of 5";
    document.querySelector("div.frame").classList.remove("zindex");
}
