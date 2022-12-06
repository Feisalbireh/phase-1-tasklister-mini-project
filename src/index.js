// document.addEventListener("DOMContentLoaded", () => {
let btn = document.getElementById("submitData");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let data = document.getElementById("new-task-description").value;
  buildToDo(data)

});

// your code here
// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault()
//   // buildToDo(e.targe.value);
//   console.log(e.target.value)
// });
// });

function buildToDo(todo) {
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.addEventListener('click', handleDelete)
  btn.textContent = "x";
  p.textContent = `${todo} `
  p.appendChild(btn)
  console.log(p)
  document.querySelector("#list").appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove()
}
