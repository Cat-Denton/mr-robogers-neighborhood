//Business logic

function roboRoger(number) {

  const numArray = [];

  for (let index = 0; index <= number; index++) {
    if(index.toString().includes(3)) {
      numArray[index] = "Won't you be my neighbor?";
    } else if (index.toString().includes(2)) {
      numArray[index] = "Boop!";
    } else if (index.toString().includes(1)) {
      numArray[index] = "Beep!";
    } else {
      numArray[index] = index.toString();
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

    $("#firstButton").hide();

    $("#repeatButton").show();

    event.preventDefault();
  });
});