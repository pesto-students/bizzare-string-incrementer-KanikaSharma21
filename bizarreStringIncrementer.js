// Start your implementation here

bizarreStringIncrementer = (origString) => {
  if (typeof origString !== "string") {
    throw "Please enter a valid string";
  }

  let newNumericString;
  let finalString;

  // this is to fetch the numeric string from the original string
  let firstpatt = /\d[0-9]+/;
  let secPatt = /[0-9]/;
  let tempNumericString = origString.match(firstpatt) || origString.match(secPatt);

  if (!tempNumericString) {
    finalString = origString + "1";
    return finalString;
  }

  let index = 0;
  let finalNumber = 0;
  let numericString = tempNumericString[0]; // as regex returns array of string

  // here , parsing string to number
  while (index < numericString.length) {
    let tempIndex = index + 1;
    finalNumber += parseInt(numericString[index]) * Math.pow(10, numericString.length - tempIndex);
    ++index;
  }

  finalNumber = finalNumber + 1;

  let diff = numericString.length - finalNumber.toString().length;
  if (diff > 0) {
    // for trailing zeroes
    let index = 0;
    while (index < diff) {
      newNumericString = "0" + finalNumber.toString();
      ++index;
    }
  } else {
    newNumericString = finalNumber.toString();
  }

  let changedString = origString.substr(
    0,
    origString.lastIndexOf(origString.match(firstpatt) || origString.match(secPatt))
  );
  finalString = changedString + newNumericString;
  return finalString;
};

try {
  let origString = "f99oo0099";
  let bizarreString = bizarreStringIncrementer(origString);
  console.log(bizarreString);
} catch (err) {
  console.log(err);
}
