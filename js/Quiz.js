class Quiz {
  constructor(){
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on('value',function(data){
       gameState = data.val();
    });

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
     background("cornFlowerBlue");
    //write code to show a heading for showing the result of Quiz
    textSize(30);
    fill("white");
    text("--RESULTS--", 300, 50);
    //call getContestantInfo( ) here
      Contestant.getContestantInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      debugger;
      var display_Answers=230;
    //write code to add a note here
fill("GOLD");
      textSize(20);
      text("**Note: Name of the contestant who answered correct is highlighted in green.",130, 230);

    }
    //write code to highlight contest who answered correctly
    
    for(var plr in allContestants){ 
      debugger; 
      var correctAns = "2";
       if (correctAns === allContestants[plr].answer)
        fill("Green");
         else fill("red");
          display_Answers+=30; 
          textSize(20);
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers) 
        }

        
    }
  }

