console.log("Hello!");

let contentDiv = document.getElementById("kanye-API-destination");

let button = document.getElementById("btn-getquote");

let kanyeHead = document.getElementById("kanye-icon");

button.addEventListener("mouseup", function(event) {

  event.preventDefault();

  let url = "https://api.kanye.rest";

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {

      console.log(json);
      console.log(json.quote);

      contentDiv.innerHTML = "&quot;" + json.quote + "&quot;";

    });

    rotateKanye();

});
