function beepBoop(number) {
  var output = "";
  var one = "Beep!";
  var two = "Boop!";
  var three = "I'm sorry, Dave. I'm afraid I can't do that.";

  number = Math.abs(Math.round(parseInt(number)));

  if(number > 0) {
    for(let i=0; i<=number; i++) {
      if(i.toString().includes("3")) {
        output += three;
      } else if(i.toString().includes("2")) {
        output += two;
      } else if(i.toString().includes("1")) {
        output += one;
      } else {
        output += i.toString();
      }
      output += ", "; 
    }
  } else {
    output = false;
  }

  return output;
}
