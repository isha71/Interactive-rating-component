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















// ## Sharing your solution

// There are multiple places you can share your solution:

// 1. Share your solution page in the **#finished-projects** channel of the [Slack community](https://www.frontendmentor.io/slack). 
// 2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
// 3. Share your solution on other social channels like LinkedIn.
// 4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

// We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback. 

// The more specific you are with your questions the more likely it is that another member of the community will give you feedback.