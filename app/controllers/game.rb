get '/' do # not functional currently
  @player1 = User.find(session[:user_one])
  @player2 = User.find(session[:user_two])
  @avatars = Avatar.all
  erb :game
end

post '/game' do
  @user_one = User.find(session[:user_one])
  @user_two = User.find(session[:user_two])
  @game = Game.create

  # need to fix avatar_id and clean up won in this if loop
  if params[@user_one.name] > params[@user_two.name]
    @game.played_games.create(user_id: @user_one.id, score: params[@user_one.name], avatar_id: 1, won: true)
    @game.played_games.create(user_id: @user_two.id, score: params[@user_two.name], avatar_id: 2, won: false)
  else
    @game.played_games.create(user_id: @user_one.id, score: params[@user_one.name], avatar_id: 1, won: false)
    @game.played_games.create(user_id: @user_two.id, score: params[@user_two.name], avatar_id: 2, won: true)
  end
  # erb :score_screen, layout: false
  # content_type: :json
  # { success: "success" }.to_json
end

get '/scorescreen' do
  @played_games = PlayedGame.all.order(created_at: :desc)
  erb :score_screen
end
