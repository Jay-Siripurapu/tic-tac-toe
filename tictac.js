$( document ).ready(function() {
  let player1="X";
  let player2="O";
  let turn=1;
  let moves=0;
  let winnercont =$(".winner");
  let reset=$(".reset");
  let p1=$(".p1");
  let p2=$(".p2");
  let col=$(".col");
  col.on('click',function(e){//excecutes on click
    moves++;
    if(moves==9)
    winnercont.html("Its a draw");

    if(this.getAttribute("checked")!="true")
    {
    this.setAttribute("checked","true");//verifies if it is aredy clicked
    if(turn === 1)
    {

      event.target.innerHTML=player1;
      event.target.style.color="red";
      turn++;
      p1.css("display","none");
      p2.css("display","block");
    }
    else{
      event.target.innerHTML=player2;
      event.target.style.color="blue";
      turn--;
      p2.css("display","none");
      p1.css("display","block");
    }}
    if (checkforwinner()){//calling check for winner function
      let thewinner = turn ===1 ? player1:player2;
      declarewinner(thewinner);
    }
    reset.on('click',function(e){
     let moves= Array.prototype.slice.call($(".col"));

     moves.map((m)=>{m.innerHTML="";m.setAttribute("checked","false");});
     winnercont.html("");

     winnercont.css("disply","none");
     turn=1;moves=0;
    });
  });
  function checkforwinner(){//function which ckes if game over
    if (moves>4){
      let moves= Array.prototype.slice.call($(".col"));
      let results =moves.map(function(col)
      {return col.innerHTML;}
      );
      let comb =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
      return comb.find(function(combo){
        if ( results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]   )
        {
          return true;
        }
        else{
          return false;
        }
      });
    }
  }
  function declarewinner(winner)
  {
  winnercont.css("display","block");
  reset.css('display','block');
   let winner1 = winner === player2?"one":"two";
   if(winner1==="two")
     winnercont.css("color","blue");
     if(winner1==="one")
     winnercont.css("color","red");
   winnercont.html(winner1+"wins");
  }
});
