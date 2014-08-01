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
      console.log(this.scores)
    }
  },
  sendScore: function(){
    $.ajax({
      type: "POST",
      url: "/game",
      data: this.scores,
    }).done(function(response){

    }).fail(function(response){

    })
  }
}


$(document).ready(function(){
  // var players = [ new Player('df', 'car'), new Player('fd', 'stella') ]
  // var game = new Game(players)
  //
  // game.start();
  var track1 = new Track("#player1_strip")
  var track2 = new Track("#player2_strip")
  var players = [new Player("hello", "car", track1, 65),
                 new Player("goodbye", "person", track2, 80)]
  var game = new Game(players)
  game.listenForKey()


})
