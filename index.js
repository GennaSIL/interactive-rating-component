var firstClick = false;
var selctedScore;

// rating selector

for (i=0; i<5; i++) {
    document.querySelectorAll("div.number")[i].addEventListener("click", function() {
        if (firstClick === true){
            document.querySelectorAll("div.number")[selctedScore - 1].classList.remove("selected");
            this.classList.add("selected");
            selctedScore = this.innerHTML;
        }else {
            firstClick = true;
            selctedScore = this.innerHTML;
            this.classList.add("selected");
        }
    });
}

// submit button

document.getElementsByTagName("button")[0].addEventListener("click", function() {
    if (firstClick === false){
        alert("Please select a rating to submit");
    } else {
        document.querySelectorAll("div.frame")[0].classList.remove("zindex");
        document.querySelectorAll("p.you-selected-line")[0].innerHTML= "You selected " + selctedScore + " out of 5";
    }
});