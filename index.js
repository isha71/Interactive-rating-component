var clickedRating;

// var ratingNumber = document.querySelectorAll(".rating_number");
// for (var i = 0; i < ratingNumber.length; i++) {
//     ratingNumber[i].addEventListener("click", function () {
//         // this.classList.add("rating_clicked");
//         clickedRating = this.innerHTML;
//     });
// }
var rate;
function setRating(rating) {
    for (var i = 0; i < rating; i++) {
        rate = document.getElementsByClassName("rating_number")[i].classList.add("rating_clicked");
        clickedRating = rating;
    }
}

document.querySelector(".submit_button").addEventListener("click", submitButtonClicked);
function submitButtonClicked() {
    document.querySelector(".rating_page").classList.add("submit_button_clicked");
    thankyouPage();
}

function thankyouPage() {
    document.querySelector(".thankyou_page").classList.toggle("display_thankyou");
    document.querySelector(".rating_result").innerHTML = "You selected " + clickedRating + " out of 5";
}

function changeRating() {
    document.querySelector(".thankyou_page").classList.toggle("display_thankyou");
    // for (var i = 0; i < document.getElementsByClassName("rating_clicked").length; i++) {
    //     document.getElementsByClassName("rating_number")[i].classList.toggle("rating_clicked");
    // }
    document.querySelector(".rating_page").classList.toggle("submit_button_clicked");
}