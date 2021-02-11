function roboRoger(number) {
  
  const numArray = [];
  let i = 0;

  while (i <= number) {
    numArray.push(i.toString());
    i ++;
  }

  let index = 0;

  for (index = 0; index < numArray.length; index++) {
    if (numArray[index].includes(1)) {
      numArray[index] = "Beep!";
    } else if (numArray[index].includes(2)) {
      numArray[index] = "Boop!";
    } else {
      numArray[index] = numArray[index];
    }
  }
  
  let numString = "";
  numArray.forEach(function(element) {
    numString = numString + element + " ";
  })

  return numString.slice(0,numString.length - 1);
}