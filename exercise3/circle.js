/*
  todo 1: look at index.html and style.css
  todo 2: make a square with div#square and inside that div put a filled circle 🟠
  todo 3: make a button and use events when its clicked remove the circle
*/

// ! ========== Answers ==========
document.addEventListener("DOMContentLoaded", () => {
  const removeButton = document.getElementById("remove");
  const circle = document.getElementById("circle");

  removeButton.addEventListener("click", () => {
    if (circle) {
      circle.remove();
    }
  });
});
