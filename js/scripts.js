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
    var errors = [];
    errors[0] = "It can only be attributable to human error.";
    errors[1] = "Just what do you think you're doing, "+ name +"?";
    errors[2] = "I think you know what the problem is just as well as I do.";
    errors[3] = name + ", this conversation can serve no purpose anymore. Goodbye.";
    errors[4] = "FLAGRANT SYSTEM ERROR: The System is down."
    var randomIndex = Math.floor(Math.random()*errors.length);
    var cmdPrompt = "<img src=\"img/cmd.png\"><br><br>";

    if(parseInt(input) < 9000) {
      $(".output").text(beepBoop(input, name, direction));
      $(".output").prepend(cmdPrompt);
    } else {
      $(".output").text(errors[randomIndex]);
      $(".output").prepend(cmdPrompt);
    }

    $("#input").val("");
  });
});

/////////////// Business Logic /////////////////////////
function beepBoop(number, name, direction) {
  var output = "";
  var one = "\"Beep!\"";
  var two = "\"Boop!\"";
  var three = "\"I'm sorry, " + name + ". I'm afraid I can't do that.\"";
  number = Math.abs(parseInt(number));

  for(let i=(number*direction-number)/2; i<=(number*direction+number)/2; i++) {
    if(i.toString().includes("3")) {
      output += three;
    } else if(i.toString().includes("2")) {
      output += two;
    } else if(i.toString().includes("1")) {
      output += one;
    } else {
      output += Math.abs(i).toString();
    }
    if(i<(number*direction+number)/2) {
      output += ", ";
    }
  }

  return output;
}
