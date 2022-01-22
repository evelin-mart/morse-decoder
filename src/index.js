const MORSE_TABLE = {
  " ": " ",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let arr = [];
  for (let i = 0; i < expr.length; i += 10) {
    let number = expr.slice(i, i + 10);
    if (number[0] === "*") {
      arr.push(" ");
      continue;
    }
    let morse = "";
    for (let j = 0; j < number.length; j += 2) {
      switch (number.slice(j, j + 2)) {
        case "10": {
          morse += ".";
          break;
        }
        case "11": {
          morse += "-";
          break;
        }
        default:
          break;
      }
    }
    arr.push(morse);
  }

  arr = arr.map((item) => MORSE_TABLE[item]);

  return arr.join("");
}

module.exports = {
  decode,
};
