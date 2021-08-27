let url = "https://psychonauts-api.herokuapp.com/api/characters?name=";

let httpOptions = {
  method: "GET",
};

function dataRespond(response) {
  return response.json();
}

// let psiPowerArr = [];

function handleData(data) {
  //debugger;
  let avatarImg = document.querySelector("img");
  avatarImg.src = `${data.img}`;
  document.querySelector("p.name").innerHTML = `${data.name.toUpperCase()}`;
  avatarImg.style.width = "350px";
  avatarImg.style.height = "350px";

  let ul = document.querySelector("ul");

  ul.innerHTML = "Psi Power";

  data.psiPowers.forEach((element) => {
    let psiName = element.name;
    let psiDesc = element.description;
    let li = document.createElement("li");
    let psiImg = document.createElement("img");
    psiImg.src = `${element.img}`;
    psiImg.style.width = "100px";
    psiImg.style.height = "115px";
    li.innerHTML = `${psiName},  ${psiDesc} <br><br>`;
    ul.appendChild(psiImg);
    ul.appendChild(li);
  });

  console.log(document.querySelectorAll("li"));
}

//fetch(url, httpOptions).then(dataRespond).then(handleData);

//Raz Profile
let razButton = document.querySelector("#raz");
razButton.addEventListener("click", function () {
  let queryRaz = "razputin";
  fetch(url + queryRaz, httpOptions)
    .then(dataRespond)
    .then(handleData);
});

//Ford Profile
let fordButton = document.querySelector("#ford");
fordButton.addEventListener("click", function () {
  let queryFord = "ford";
  fetch(url + queryFord, httpOptions)
    .then(dataRespond)
    .then(handleData);
});

//Milla Profile
let millaButton = document.querySelector("#milla");
millaButton.addEventListener("click", function () {
  let queryMilla = "milla";
  fetch(url + queryMilla, httpOptions)
    .then(dataRespond)
    .then(handleData);
});

//Sasha Profile
let sashaButton = document.querySelector("#sasha");
sashaButton.addEventListener("click", function () {
  let querySasha = "sasha";
  fetch(url + querySasha, httpOptions)
    .then(dataRespond)
    .then(handleData);
});

//Coach Profile
let coachButton = document.querySelector("#morceau");
coachButton.addEventListener("click", function () {
  let queryCoach = "morceau";
  fetch(url + queryCoach, httpOptions)
    .then(dataRespond)
    .then(handleData);
});

//Lili profile
let liliButton = document.querySelector("#lili");
liliButton.addEventListener("click", function () {
  let queryLili = "lili";
  fetch(url + queryLili, httpOptions)
    .then(dataRespond)
    .then(handleData);
});
