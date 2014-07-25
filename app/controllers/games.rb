get '/' do
  if session[:user_id] != nil
    @user = User.find(session[:user_id])
    erb :game
  else
    redirect '/login'
  end
end
post '/game' do
  @user = User.find(session[:user_id])
  @game = Game.create(winner: @user.name)
  @score = PlayedGame.create(user_id: @user.id,
                             game_id: @game.id,
                             score: 10)
  redirect '/scorescreen'
end

get '/scorescreen' do
  @played_games = PlayedGame.all
  erb :score_screen
end
