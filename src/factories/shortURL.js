// Arrays for genrating random strings
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  function pickALetter() {
    let letter = letters.charAt(Math.floor(Math.random()*72));
    return letter;
  }

  function pickANumber() {
    let number = Math.floor(Math.random() *10);
    return number;
  }

// Function for creating short URLs
exports.generate = () => {

  // Set variable for looping
  var i = 0;
  var ii = 9;
  let letter1 = pickALetter();
  let letter2 = pickALetter();
  let letter3 = pickALetter();
  let number1 = pickANumber();
  let number2 = pickANumber();
  let number3 = pickANumber();

  let result = letter1 + letter2 + letter3 + number1.toString() + number2.toString() + number3.toString();

  return result;

}
