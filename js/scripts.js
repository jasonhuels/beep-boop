/////////////// User Interface /////////////////////////
$(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var name = $("#name").val();
    if(!name) {
      name = "Dave";
    }
    var direction = $("input:radio[name=direction]:checked").val();
    var operation = "";
    var errors = [];
    errors[0] = "It can only be attributable to human error.";
    errors[1] = "Just what do you think you're doing, "+ name +"?";
    errors[2] = "I think you know what the problem is just as well as I do.";
    errors[3] = name + ", this conversation can serve no purpose anymore. Goodbye.";
    var randomIndex = Math.floor(Math.random()*errors.length);
    var cmdPrompt = "<img src=\"img/cmd.png\"><br><br>";

    if(parseInt(input) < 9000) {
      if(direction === "reverse") {
        operation = boopBeep(input, name);
      } else {
        operation = beepBoop(input, name);
      }
      $(".output").text(operation);
      $(".output").prepend(cmdPrompt);
    } else {
      $(".output").text(errors[randomIndex]);
      $(".output").prepend(cmdPrompt);
    }

    $(".form").trigger("reset");
  });
});

/////////////// Business Logic /////////////////////////
function beepBoop(number, name) {
  var output = "";
  var one = "\"Beep!\"";
  var two = "\"Boop!\"";
  var three = "\"I'm sorry, " + name + ". I'm afraid I can't do that.\"";

  number = Math.abs(parseInt(number));

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
      if(i<number) {
        output += ", ";
      }
    }
  } else {
    output = number;
  }

  return output;
}

function boopBeep(number, name) {
  var output = "";
  var one = "\"Beep!\"";
  var two = "\"Boop!\"";
  var three = "\"I'm sorry, " + name + ". I'm afraid I can't do that.\"";

  number = Math.abs(parseInt(number));

  if(number > 0) {
    for(let i=number; i>=0; i--) {
      if(i.toString().includes("3")) {
        output += three;
      } else if(i.toString().includes("2")) {
        output += two;
      } else if(i.toString().includes("1")) {
        output += one;
      } else {
        output += i.toString();
      }
      if(i>0) {
        output += ", ";
      }
    }
  } else {
    output = number;
  }

  return output;
}
