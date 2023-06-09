const convertNumber = (number: string) => {
  let result = '';
  let counter = 0;
  for (let i = number.length - 1; i >= 0; i--) {
    let privLetter = number[i];
    if (counter == 2 || counter == 4) privLetter = `- ${privLetter}`;
    if (counter == 7) privLetter = ` )${privLetter}`;
    if (counter == 9) privLetter = `${privLetter}( `;
    result += privLetter;
    counter++;
  }
  const reverseResult = result.split('').reverse().join('');
  return `+ ${reverseResult}`;
};

export default convertNumber;
