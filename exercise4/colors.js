/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.

- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.

- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.

- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 

- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

rgba(31, 127, 102, 1)
rgba(255, 200, 0, 1)
rgba(255, 123, 0, 1)
rgba(216, 1, 1, 1)
rgba(223, 4, 70, 1)
rgba(127, 31, 85, 1) 
rgba(93, 18, 199, 1)
rgba(93, 18, 199, 1)
*/

//Answer:

document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".circle");
  const rects = document.querySelectorAll(".rect");

  const colors = {
    green: "31, 127, 102",
    yellow: "255, 200, 0",
    orange: "255, 123, 0",
    red: "216, 1, 1",
    pink: "223, 4, 70",
    purple: "127, 31, 85",
    blue: "93, 18, 199",
  };

  circles.forEach((circle) => {
    circle.addEventListener("click", () => {
      const color = colors[circle.classList[1]];

      rects.forEach((rect, index) => {
        rect.style.backgroundColor = `rgba(${color}, ${1 - index * 0.2})`;
      });
    });
  });
});
