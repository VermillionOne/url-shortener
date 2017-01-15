// Arrays for genrating random strings
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function pickALetter() {
  const letter = letters.charAt(Math.floor(Math.random() * 72));
  return letter;
}

function pickANumber() {
  const number = Math.floor(Math.random() * 10);
  return number;
}

// Function for creating short URLs
exports.generate = () => {
  // Set variable for looping
  const letter1 = pickALetter();
  const letter2 = pickALetter();
  const letter3 = pickALetter();
  const num1 = pickANumber();
  const num2 = pickANumber();
  const num3 = pickANumber();
  const result = letter1 + letter2 + letter3 + num1.toString() + num2.toString() + num3.toString();
  return result;
};
