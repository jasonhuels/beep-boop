/////////////// User Interface /////////////////////////
$(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var name = $("#name").val();
    if(!name) {
      name = "Dave";
    }

    var errors = [];
    errors[0] = "It can only be attributable to human error.";
    errors[1] = "Just what do you think you're doing, "+ name +"?";
    errors[2] = "I think you know what the problem is just as well as I do.";
    errors[3] = name + ", this conversation can serve no purpose anymore. Goodbye.";
    var cmdPrompt = "<img src=\"img/cmd.png\"><br><br>";

    if(parseInt(input) < 9000) {
      $(".output").text(beepBoop(input, name));
      $(".output").prepend(cmdPrompt);
    } else {
      $(".output").text(errors[Math.floor(Math.random()*errors.length)]);
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
