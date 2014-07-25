get '/' do
  if session[:user_id] != nil
    @user = User.find(session[:user_id])
    erb :game
  else
    redirect '/login'
  end
end

get '/score_screen' do
  @user = User.find(session[:user_id])
  @game = Game.create(winner: @user.name)
  @score = PlayedGame.create(user_id: @user.id,
                             game_id: @game.id,
                             score: 10)
  erb :score_screen
end
