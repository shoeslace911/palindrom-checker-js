let givenWord = document.querySelector("#word-input");
let input = document.querySelector("#submit-butt");
let answer = document.querySelector("#answer");

input.addEventListener("click", () => {
  let givenWordValue = givenWord.value.toLowerCase();
  let sliced = givenWordValue.split("");
  let reverse = [];
  for (let i = 0; i < sliced.length; i++) {
    reverse.unshift(sliced[i]);
  }
  console.log(reverse.join(""));
  if (reverse.join("") == givenWordValue) {
    answer.innerHTML = `${givenWordValue} is a palindrome!`;
  } else {
    answer.innerHTML = `no`;
  }
});
