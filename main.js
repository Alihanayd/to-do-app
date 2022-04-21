function newItem() {
  var li = document.createElement("li");
  var span = document.createElement("span");
  var inputValue = document.getElementById("input").value;
  var a = document.createTextNode(inputValue);
  var btn = document.createElement("button");
  var imConfuseDiv = document.createElement("div");

  // Add item

  span.className = "list-element-text";
  imConfuseDiv.className = "list-container";
  btn.className = "done";

  li.appendChild(imConfuseDiv);
  imConfuseDiv.appendChild(btn);
  span.appendChild(a);
  if (inputValue == 0) {
    swal("You must write something!", "", "error");
  } else {
    document
      .getElementById("list")
      .appendChild(li)
      .appendChild(imConfuseDiv)
      .appendChild(span);
    li.classList.add("list-element");
  }
  document.getElementById("input").value = "";

  // Checker

  btn.addEventListener("click", function () {
    this.parentNode.classList.toggle("checked");
    this.classList.toggle("checked-button");
  });

  // Delete item

  var deleteDiv = document.createElement("div");
  var deleteBtn = document.createElement("button");
  var trash = document.createElement("i");

  deleteDiv.className = "delete-container";
  deleteBtn.className = "delete";
  deleteBtn.innerHTML = "<span class='delete-text' >Delete</span>";
  trash.className = "far fa-trash-alt";
  deleteBtn.appendChild(trash);
  deleteDiv.appendChild(deleteBtn);
  li.appendChild(deleteDiv);
  var dlt = document.querySelectorAll(".delete");
  dlt.forEach((el) => {
    el.addEventListener("click", () => {
      el.parentNode.parentNode.remove();
    });
  });
}
document.getElementById("input").addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    newItem();
  }
});
