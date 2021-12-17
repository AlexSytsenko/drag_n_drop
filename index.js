const item = document.querySelector(".item");
const placeholders = document.querySelectorAll(".placeholder");

item.addEventListener("dragstart", dragStartHandler);
item.addEventListener("dragend", dragEndHandler);

placeholders.forEach((el) => {
  el.addEventListener("dragover", dragOverHandler);
  el.addEventListener("dragenter", dragEnterHandler);
  el.addEventListener("dragleave", dragLeaveHandler);
  el.addEventListener("drop", dragDropHandler);
});

function dragStartHandler(event) {
  event.target.classList.add("hold");
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
}

function dragEndHandler(event) {
  event.target.className = "item";
}

function dragOverHandler(event) {
  event.preventDefault();
}

function dragEnterHandler(event) {
  event.target.classList.add("hovered");
}

function dragLeaveHandler(event) {
  event.target.classList.remove("hovered");
}

function dragDropHandler(event) {
  event.target.classList.remove("hovered");
  event.target.append(item);
}