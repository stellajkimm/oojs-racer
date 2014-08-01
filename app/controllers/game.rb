get '/' do # not functional currently
  if session[:user_id] != nil
    @user = User.find(session[:user_one])
    erb :game
  else
    redirect '/login'
  end
end

post '/game' do
  @user_one = User.find(session[:user_one])
  @user_two = User.find(session[:user_two])
  @game = Game.create(winner: @user.name)
  @score = PlayedGame.create(user_id: @user.id,
                             game_id: @game.id,
                             score: 10)
  redirect '/scorescreen'
end

get '/scorescreen' do
  @played_games = PlayedGame.all.order(created_at: :desc)
  erb :score_screen
end

get '/hello' do
  erb :game
end
