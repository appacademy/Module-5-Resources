console.log("hi from script file");

const countContent = document.getElementById("count");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
let countState = 0;

countContent.innerHTML = JSON.stringify(countState);

const plus = () => {
  ++countState;
  countContent.innerHTML = JSON.stringify(countState);
};

const minus = () => {
  --countState;
  countContent.innerHTML = JSON.stringify(countState);
};

plusButton.addEventListener("click", plus);
minusButton.addEventListener("click", minus);

let dataFromApi;

fetch("https://dog.ceo/api/breeds/image/random")
  .then((ResponsePromise) => ResponsePromise.json())
  .then((data) => {
    dataFromApi = data;
    console.log("DATA AFTER FETCH, dataFromApi: ", dataFromApi);
    document.getElementById("puppy-pic").src = dataFromApi.message
  })
  .catch((err) => {
    console.warn("encountered error when fetching, err: ", err);
  });

import("./script2.js").then((module) => {
  console.log("after import, module: ", module);
  document.getElementById("other-stuff").appendChild(module.header);
});

console.log("retrieving from storage...", window.localStorage.getItem("thing"))