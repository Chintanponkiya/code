function editElement(button) {
  let td = $(button).parent();
  let span = td.find("span");
  let input = $("<input>").val(span.text());

  let checkButton = createButton("&#10004;", function () {
    saveElement(this);
    blockEditDisplay(td, input, checkButton, uncheckButton, span, button);
  });

  let uncheckButton = createButton("&#10008;", function () {
    cancelEdit(this, td, input, checkButton, uncheckButton, span, button);
  });

  td.prepend(input, checkButton, uncheckButton).find(span).remove();
  $(button).hide();
}

function createButton(text, onClick) {
  let button = $("<button>").html(text).click(onClick);
  return button;
}

function blockEditDisplay(td, input, checkButton, uncheckButton, span, button) {
  input.hide()
  checkButton.hide();
  uncheckButton.hide();
  $(button).show();
}

function cancelEdit(button, td, input, checkButton, uncheckButton, span, editButton) {
  td.prepend(span).find(input.add(uncheckButton).add(checkButton)).remove();
  $(button).click(function () {
    editElement(this);
  });
  $(editButton).show();
}

function saveElement(button) {
  let td = $(button).parent();
  let input = td.find("input");
  let span = $("<span>");
  if (input.val() === "") {
    alert("Please add a value");
    input.val(td.data("previousValue"));
  }
  span.text(input.val());
  td.prepend(span).find(input).remove();
  $(button).click(function () {
    editElement(this);
  });
}

function deleteCell(cell) {
  let span = $(cell).find("span");
  let previousValue = span.html();

  span.html(`<button class="delete-button"><i class="fas fa-undo"></i></button>`);
  $(cell).find(".delete-button").click(function () {
    span.html(previousValue);
  });
}
