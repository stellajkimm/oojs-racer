function Player(name, avatar){
  this.name = name;
  this.avatar = avatar;
  this.position = 2;
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

function Game(players, tracks){
  var track = new Track
  this.finished = false;
}

Game.prototype = {
  listenForKey: function(keyCode, player, track){
    $(document).on('keypress', function(e){
      if(e.which === keyCode && game.finished == false){
        game.checkForWin(player);
        player.move(track)
      }
    })
  },
  checkForWin: function(player){
    if(player.position === 10){
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
  var track = new Track("#player1_strip")
  var player = new Player("hello", "car")
  var game = new Game(player, track)
  game.listenForKey(97, player, track)


})
