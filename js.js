let givenWord = document.querySelector("#word-input");
let input = document.querySelector("#submit-butt");

input.addEventListener("click", () => {
  let givenWordValue = givenWord.value.toLowerCase();
  let sliced = givenWordValue.split("");
  let reverse = [];
  for (let i = 0; i < sliced.length; i++) {
    reverse.unshift(sliced[i]);
  }
  console.log(reverse.join(""));
  if (reverse.join("") === givenWordValue) {
    console.log(`${givenWordValue} is a palindrome!`);
  } else {
    console.log(`no`);
  }
});
