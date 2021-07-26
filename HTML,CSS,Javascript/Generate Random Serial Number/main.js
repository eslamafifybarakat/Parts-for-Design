
let serialEl = document.querySelector(".serial");



let x = () => {
  let character = "1238ssdfgkjgfd25521fff5f52ff121f5ff21f1f5521255r8p";
  let charCount = 10;
  let randomSerial = "";
  for (let i = 0; i < charCount; i++) {
    randomSerial += character[Math.floor(Math.random() * character.length)];
 
  }

  serialEl.innerHTML = randomSerial;
};