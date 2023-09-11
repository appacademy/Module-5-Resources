var create = document.createElement.bind(document)
var get = document.getElementById.bind(document)

function createCounterElements() {
  const wrapperDiv = create("div")
  const countDiv = create("h3")
  const incButton = create("button")

  wrapperDiv.setAttribute("id", "wrapper")
  countDiv.setAttribute("id", "count-div")
  incButton.setAttribute("id", "inc-button")

  countDiv.innerText = 0
  incButton.innerText = "increment"

  wrapperDiv.appendChild(countDiv)
  wrapperDiv.appendChild(incButton)

  get("root").appendChild(wrapperDiv)
}

function addCounterLogic() {
  const countData = { count: 0 }

  get("inc-button").addEventListener("click", (eventObject) => {
    countData.count = countData.count + 1
    get("count-div").innerText = countData.count
    console.log("bzzt")
  })
}

createCounterElements();
addCounterLogic();

import("./other-scripts.js")