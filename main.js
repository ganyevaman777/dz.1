const number = document.querySelector(".numbers");
const checker = document.querySelector(".check");
const result = document.querySelector(".result");

const regExp = /^0 \d{13}$|^1 \d{13}$/;


checker.addEventListener("click", () =>{
    if (regExp.test(number.value)) {
    result.innerText = "ok";
    result.style.color = "green";
  } else {
    result.innerText = "not  ok";
    result.style.color = "red";
  }
});


const small = document.querySelector(".small")
const move = document.querySelector(".move")

let position = 0;

const blockMove = () => {
    if (position < 460) {
        position += 15;
        small.style.left = `${position}px`;
        setTimeout(blockMove, 100)
    }
};

move.addEventListener("click", () => {blockMove();
});
