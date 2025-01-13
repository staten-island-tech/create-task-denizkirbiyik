import "../style.css";

let length = 2;
let strikes = 0;
let currentClickIndex = 0;

function generateSquares(amt) {
  document.querySelector("#length").innerHTML = length;
  document.querySelector("#strikes").innerHTML = strikes;
  let squares = new Set();
  while (squares.size < amt) {
    squares.add(Math.floor(Math.random() * 48) + 1);
  }
  const squaresArray = [...squares];
  squaresArray.forEach((square, index) => {
    const square_doc = document.querySelector(`#tile-${square}`);
    square_doc.classList.remove("bg-custom-dark-blue");
    square_doc.classList.add("bg-custom-light-blue");
    square_doc.innerHTML = `<p class="text-4xl">${index + 1}</p>`;

    const clickHandler = () => {
      if (index === currentClickIndex) {
        if (currentClickIndex === 0)
          square_doc.classList.remove("bg-custom-light-blue");
        else square_doc.classList.remove("bg-white");
        square_doc.classList.add("bg-custom-dark-blue");
        square_doc.innerHTML = ``;
        currentClickIndex++;
        if (currentClickIndex === 1) {
          squaresArray.forEach((sq, idx) => {
            if (idx !== 0) {
              const sq_doc = document.querySelector(`#tile-${sq}`);
              sq_doc.classList.remove("bg-custom-light-blue");
              sq_doc.classList.add("bg-white");
              sq_doc.innerHTML = "";
            }
          });
        }
        if (currentClickIndex === length) {
          length++;
          currentClickIndex = 0;
          clearSquares();
          generateSquares(length);
        }
      } else {
        strikes++;
        if (strikes >= 3) {
          length = 2;
          strikes = 0;
          currentClickIndex = 0;
          clearSquares();
          generateSquares(length);
          return;
        }
        currentClickIndex = 0;
        clearSquares();
        generateSquares(length);
      }
    };

    square_doc.addEventListener("click", clickHandler);
  });
}

function clearSquares() {
  for (let i = 1; i <= 48; i++) {
    const square_doc = document.querySelector(`#tile-${i}`);
    const new_square_doc = square_doc.cloneNode(true);
    square_doc.parentNode.replaceChild(new_square_doc, square_doc);
    new_square_doc.classList.remove("bg-custom-light-blue", "bg-white");
    new_square_doc.classList.add("bg-custom-dark-blue");
    new_square_doc.innerHTML = ``;
  }
}

generateSquares(length);
