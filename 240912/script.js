console.log(this);

const button = document.getElementById("button");
console.log(button);

button.addEventListener("click", function () {
  console.log("이벤트객체", this);
  this.style.backgroundColor = "pink";
});
