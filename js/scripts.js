//Business logic

function roboRoger(number) {

  // if (typeof(number) != integer)
  
  const numArray = [];
  let i = 0;

  while (i <= number) {
    numArray.push(i.toString());
    i ++;
  }

  let index = 0;
  
  for (index = 0; index < numArray.length; index++) {
    if (numArray[index].includes(3)) {
      numArray[index] = "Won't you be my neighbor?";
    } else if (numArray[index].includes(2)) {
      numArray[index] = "Boop!";
    } else if (numArray[index].includes(1)) {
      numArray[index] = "Beep!";
    } else {
      numArray[index] = numArray [index];
    }
  }

  let numString = "";
  numArray.forEach(function(element) {
    numString = numString + element + " ";
  })

  return numString.slice(0,numString.length - 1);
}

//UI logic

$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    
    const num = $("input#number").val();

    const story = roboRoger(parseInt(num));
    $("#roboRogerTalk").text(story);

    event.preventDefault();
  });
});