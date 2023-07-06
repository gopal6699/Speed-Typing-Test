let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");

function randomQuotation() {
  let url = "https://apis.ccbp.in/random-quote";
  spinnerEl.classList.remove("d-none");
  let options = {
    method: "GET",
  };
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      //console.log(jsonData);
      quoteDisplayEl.textContent = jsonData.content;
      spinnerEl.classList.add("d-none");
    });
}

randomQuotation();

function timerStart() {
  let second = 0;
  let timer = setInterval(function () {
    second = second + 1;
    timerEl.textContent = second;
  }, 1000);
}

let second = 0;
let timer = setInterval(function () {
  second = second + 1;
  timerEl.textContent = second;
}, 1000);

submitBtnEl.addEventListener("click", function () {
  let quote = quoteDisplayEl.textContent;
  if (quoteInputEl.value === quote) {
    // console.log("OK");
    let timerCount = timerEl.textContent;
    resultEl.textContent = "You typed in " + timerCount + " seconds";
    resultEl.style.color = "#87fa64";
    clearInterval(timer);
  } else if (quoteInputEl.value === "") {
    resultEl.textContent = "Please type the sentence";
    resultEl.style.color = "#00f7ff";
  } else {
    resultEl.textContent = "You typed incorrect sentence";
    resultEl.style.color = "Yellow";
  }
});

resetBtnEl.addEventListener("click", function () {
  clearInterval(timer);
  randomQuotation();
  timerStart();
  quoteInputEl.value = "";
  resultEl.textContent = "";
});
