function Player(playerName, track, keyCode){
  this.avatar = "";
  this.position = 1;
  this.name = playerName
  this.track = track
  this.keyCode = keyCode
  }

Player.prototype = {
  move: function(){
    this.position ++
    this.track.updatePosition(this)
  },
  backToStart: function(){
    console.log("backToStart")
    this.position = 1;
    this.track.updatePosition(this)
  }
}


function Track(trackNumber){
  this.track = trackNumber;
}

Track.prototype = {
  updatePosition: function(player){
    console.log("updatePosition")
    $(this.track+" td.active").html("")
    $(this.track+" td.active").removeClass('active')
    $(this.track+" td:nth-child("+player.position+")").addClass('active')
    $(this.track+" td:nth-child("+player.position+")").html('<img src="' + player.avatar + '" height="42" width="42" >')
  }
}

function Game(players){
  this.players = players
  this.finished = true;
  this.scores = {}
}

Game.prototype = {
  startGame: function() {
    this.finished = false;
    this.listenForKey();
  },
  listenForKey: function(){
    var that = this
    $(document).on('keyup', function(e){
      for(i=0; i < that.players.length; i++){
        if(e.which == that.players[i].keyCode && that.finished == false){
          that.players[i].move(that.players[i].track)
          that.checkForWin(that.players[i]);
        } // end if
      } // end for
    }) // end listenForKey
  },
  checkForWin: function(player){
    if(player.position === 21){
      alert("yay!")
      this.finished = true
      this.recordScores();
    }
  },
  recordScores: function() {
    for(i=0; i < this.players.length; i++){
      this.scores[this.players[i].name] = this.players[i].position
      console.log(this.scores)
    }
    this.sendScore();
  },
  sendScore: function(){
    console.log(this.scores)
    $.ajax({
      type: "POST",
      url: "/game",
      data: this.scores,
    }).done(function(response){
      console.log(response)
      $('body').html(response)
      console.log(response.success)
    }).fail(function(response){

    })
  },
  resetGame: function(){
    console.log("resetGame")
    this.finished = false;
    for(i in this.players){
      this.players[i].backToStart()
    // this.players.forEach(backToStart());
    }
  }
}


$(document).ready(function(){

  var track1 = new Track("#player1_strip")
  var track2 = new Track("#player2_strip")

  player1 = new Player("armen", track1, 65)
  player2 = new Player("stella", track2, 80)
  var players = [player1, player2]

  var game = new Game(players)

  $('#start_game').on("click", function(e){
    e.preventDefault();
    $.get('/', function(response){
      game.startGame();
    })
  })

  $("#reset_game").on("click", function(){
    game.resetGame();
  })
})
