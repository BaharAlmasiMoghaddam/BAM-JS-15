// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"

//Answer:
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = "#0a122d";

  // todo-2:select image and set margin "4rem 0"

  //Answer:
  const image = document.getElementById("strangeFish");
  image.style.margin = "4rem 0";

  // todo-3:Apply a rounded border to the image and set its size to "1 rem"

  //Answer:
  image.style.borderRadius = "1rem";

  // todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)

  // !Answer:
  const h1 = document.querySelector(".hero__title");
  const h5 = document.querySelector(".hero__subtitle");

  h1.style.position = "relative";
  h1.style.top = "-3rem";
  h1.style.left = "2rem";

  h5.style.position = "relative";
  h5.style.top = "-2rem";
  h5.style.left = "2rem";
});
