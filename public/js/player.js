function Player(name, avatar){
  this.name = name;
  this.avatar = avatar;
  this.position = 2;
}

Player.prototype = {
  move: function(keyCode, track){
    this.position ++
    track.updatePosition(this.position)
  }
}


function Track(trackNumber){
  this.track = trackNumber;
}

Track.prototype = {
  updatePosition: function(playerPosition){
    console.log($(this.track+" td.active").removeClass('active'))
    console.log($(this.track+" td:nth-child("+playerPosition+")").addClass('active'))
  }
}

function Game(players, tracks){
  var track = new Track

}

Game.prototype = {
  checkForWin: function(keyCode){
    // if player.position == 10,
    // win
  }
}

$(document).ready(function(){
  // var players = [ new Player('df', 'car'), new Player('fd', 'stella') ]
  // var game = new Game(players)
  //
  // game.start();
  var track = new Track("#player1_strip")
  var player = new Player("hello", "car")
  player.move(86, track)

})
