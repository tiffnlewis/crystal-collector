$( document ).ready(function(){
  var Random=Math.floor(Math.random()*50)

  $("#randomNumber").html(Random);

  var num1= Math.floor(Math.random()*11)
  var num2= Math.floor(Math.random()*11)
  var num3= Math.floor(Math.random()*11)
  var num4= Math.floor(Math.random()*11)

  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

$("#numberWins").html(wins);
$("#numberLosses").html(losses);

function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $("#randomNumber").html(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $("#finalTotal").html(userTotal);
      } 

function win(){
  wins++; 
  $("#numberWins").html(wins);
  reset();
}
function lose(){
  losses++;
  $("#numberLosses").html(losses);
  reset();
}

  $("#one").on ("click", function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").html(userTotal); 
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }   
  })  
  $("#two").on ("click", function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").html(userTotal); 
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        } 
  })  
  $("#three").on ("click", function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").html(userTotal);
          if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        } 
  })  
  $("#four").on ("click", function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").html(userTotal); 
          if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }
  });   
}); 
