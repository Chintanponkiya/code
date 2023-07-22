function editElement(button) {
  let td = button.parentNode;
  let span = td.querySelector("span");
  let input = document.createElement("input");
  input.value = span.textContent;

  let checkButton = createButton("&#10004;", function() {
    saveElement(this);
    blockEditDisplay(td, input, checkButton, uncheckButton, span, button);
  });

  let uncheckButton = createButton("&#10008;", function() {
    cancelEdit(this, td, input, checkButton, uncheckButton, span, button);
  });

  td.insertBefore(input, span);
  td.insertBefore(checkButton, span);
  td.insertBefore(uncheckButton, span);
  td.removeChild(span);
  button.style.display = "none";
}
  
function createButton(text, onClick) {
  let button = document.createElement("button");
  button.innerHTML = text;
  button.onclick = onClick;
  return button;
}

function blockEditDisplay(td, input, checkButton, uncheckButton, span, button) {
  input.disabled = true;
  checkButton.disabled = true;    
  uncheckButton.disabled = true;
  button.style.display = "";
}

function cancelEdit(button, td, input, checkButton, uncheckButton, span, editButton) {
  td.insertBefore(span, input);
  td.removeChild(input);
  td.removeChild(uncheckButton);
  td.removeChild(td.querySelector("button"));
  button.style.display = "initial";
  button.innerHTML = "&#9998;";
  button.onclick = function() {
    editElement(this);
  };
  editButton.style.display = "initial";
}

function saveElement(button) {
  let td = button.parentNode;
  let input = td.querySelector("input");
  let span = document.createElement("span");
  if (input.value === "") {
    alert("Please add a value");
    input.value = td.previousValue;
  }
  span.textContent = input.value;
  td.insertBefore(span, input);
  td.removeChild(input);
  td.removeChild(td.querySelector("button"));
  td.removeChild(td.querySelector("button"));
  button.style.display = "initial";
  button.innerHTML = "&#9998;";
  button.onclick = function() {
    editElement(this);
  };
}

function deleteCell(cell) {
  let span = cell.querySelector("span");
  let previousValue = span.innerHTML;

  span.innerHTML = `<button class="delete-button" onclick="undoDelete(this)"><i class="fas fa-undo"></i></button>`;
  cell.querySelector(".delete-button").addEventListener("click", function() {
    span.innerHTML = previousValue;
  });
}


