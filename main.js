const btn = document.getElementById("btn");
const colorName = document.querySelector(".colorName");

// const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue"];
// function getRandomNumber() {
//  return Math.floor(Math.random() * colors.length);
// }

// btn.addEventListener("click", function () {
//  const randomNumber = getRandomNumber();

//  console.log(randomNumber);

//  document.body.style.backgroundColor = colors[randomNumber];
//  color.textContent = colors[randomNumber];
// });

// console.log(Math.random() * 5);

// Start Second Trail

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function getRandomcolor() {
 let c1 = colors[Math.floor(Math.random() * colors.length)];
 let c2 = colors[Math.floor(Math.random() * colors.length)];
 let c3 = colors[Math.floor(Math.random() * colors.length)];
 let c4 = colors[Math.floor(Math.random() * colors.length)];
 let c5 = colors[Math.floor(Math.random() * colors.length)];
 let c6 = colors[Math.floor(Math.random() * colors.length)];
 return `#${c1}${c2}${c3}${c4}${c5}${c6}`;
}

btn.addEventListener("click", function () {
 const randomcolors = getRandomcolor();

 //  console.log(randomcolors);

 document.body.style.backgroundColor = randomcolors;
 colorName.textContent = randomcolors;
});
// End Of Second Trail
