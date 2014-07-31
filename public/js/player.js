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
}

Game.prototype = {
  listenForKey: function(){
    console.log(this.players)
    var that = this
    $(document).on('keyup', function(e){
      for(i=0; i < that.players.length; i++){
        console.log(that.players[i].keyCode)
        console.log(e.which)
        if(e.which == that.players[i].keyCode && that.finished == false){
          console.log("hi")
          that.checkForWin(that.players[i]);
          that.players[i].move(that.players[i].track)
        } // end if
      } // end for
    }) // end listenForKey
  },
  checkForWin: function(player){
    if(player.position === 13){
      alert("yay!")
      this.finished = true
    }
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
