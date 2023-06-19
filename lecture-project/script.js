console.log("hi from script file")

const countContent = document.getElementById("count")
const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
let countState = 0

countContent.innerHTML = JSON.stringify(countState)

const plus = () => {
  ++countState
  countContent.innerHTML = JSON.stringify(countState)
}

const minus = () => {
  --countState
  countContent.innerHTML = JSON.stringify(countState)
}

plusButton.addEventListener("click", plus)
minusButton.addEventListener("click", minus)