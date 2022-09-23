// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

document.querySelector("#modal").classList.add("hidden")

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

const liking = document.getElementsByClassName("like-glyph")

for (const element of liking){
  element.addEventListener("click", e => {
    mimicServerCall()
    .then(() => {
      if (e.target.textContent === EMPTY_HEART){
        e.target.textContent = FULL_HEART
        e.target.classList.add("activated-heart")
      }
      else {
        e.target.textContent = EMPTY_HEART
        e.target.classList.remove("activated-heart")
      }
    })
    .catch(error => alert(error))
  })
}
