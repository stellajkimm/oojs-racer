function Player(name, avatar, track, keyCode){
  this.name = name;
  this.avatar = avatar;
  this.position = 2;
  this.track = track
  this.keyCode = keyCode
}

Player.prototype = {
  move: function(track){
    this.position ++
    track.updatePosition(this.position)
  }
}


function Track(trackNumber){
  this.track = trackNumber;
}

Track.prototype = {
  updatePosition: function(playerPosition){
    $(this.track+" td.active").removeClass('active')
    $(this.track+" td:nth-child("+playerPosition+")").addClass('active')
  }
}

function Game(players){
  this.players = players
  this.finished = false;
  this.scores = {}
}

Game.prototype = {
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
      $('body').html(response)
    }).fail(function(response){

    })
  }
}


$(document).ready(function(){
  // var players = [ new Player('df', 'car'), new Player('fd', 'stella') ]
  // var game = new Game(players)
  //
  // game.start();
  // var trackOne = document.getElementById("player1_strip")
  var playerOneName = $('#player1_strip').data("player-one")
  var playerTwoName = $('#player2_strip').data("player-two")

  var playerOneAvatar = $('#player1_strip').data("avatar")
  var playerTwoAvatar = $('#player2_strip').data("avatar")

  var track1 = new Track("#player1_strip")
  var track2 = new Track("#player2_strip")

  var players = [new Player(playerOneName, playerOneAvatar, track1, 65),
                 new Player(playerTwoName, playerTwoAvatar, track2, 80)]
  var game = new Game(players)
  game.listenForKey()


})
