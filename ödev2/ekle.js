
function newElement() {
  var inputValue = document.getElementById("task").value;
  if (inputValue === "") {
   
    showToastError("Listeye boş ekleme yapamazsınız!");
  } else {
  
    var li = document.createElement("li");
    var text = document.createTextNode(inputValue);

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    deleteButton.addEventListener("click", function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });

    li.addEventListener("click", function() {
      this.classList.toggle("crossed");
    });

    li.appendChild(text);
    li.appendChild(deleteButton);

    document.getElementById("list").appendChild(li);

    //
    showToastSuccess("Listeye eklendi.");

    
    document.getElementById("task").value = " ";
  }
}

function showToastSuccess(message) {
  var toast = document.querySelector(".toast.success");
  var toastBody = toast.querySelector(".toast-body");
  toastBody.textContent = message;
  toast.classList.remove("hide");
  setTimeout(function() {
    toast.classList.add("hide");
  }, 4000);
}

function showToastError(message) {
  var toast = document.querySelector(".toast.error");
  var toastBody = toast.querySelector(".toast-body");
  toastBody.textContent = message;
  toast.classList.remove("hide");
  setTimeout(function() {
    toast.classList.add("hide");
  }, 4000);
}
