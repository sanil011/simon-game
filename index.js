
var buttonColor=["red","green","yellow","blue"];
var gamePattern=[];
var clickedPattern=[];
var level= 0;

var started= false;



$(".btn").click(function()
{
    var userChosenColor= $(this).attr("id");
    clickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(clickedPattern.length-1);
    animatePress(userChosenColor);
});

// i love simon game.


  $("body").keydown(function()
  { if (!started) {
      $("#level-title").text("Level "+ level);
      nextSequence();
      started=true;}
  });
  function checkAnswer(currentlevel)
  {
    if (gamePattern[currentlevel] === clickedPattern[currentlevel]) {
        if (clickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
      }
  }
  function nextSequence ()
    { userClickedPattern=[];
        level++;
        $("#level-title").text("Level "+ level);
        var random =Math.floor(Math.random() *4);
        
    
    var randomChoosenColor = buttonColor[random];
     gamePattern.push(randomChoosenColor);

 $("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
 playSound(randomChoosenColor);
}



  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
 audio.play();
}
  function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
  