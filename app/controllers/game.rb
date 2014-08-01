get '/' do # not functional currently
  # @player1 = User.find(session[:user_one])
  # @player2 = User.find(session[:user_two])
  # @player1_avatar_image = Avatar.find(@player1.played_games.last.avatar_id).image_url
  # @player2_avatar_image = Avatar.find(@player2.played_games.last.avatar_id).image_url
  #
  # @avatars = Avatar.all
  erb :game
end

post '/game' do
  @user_one = User.find_by(name: "armen")
  @user_two = User.find_by(name: "stella")
  @game = Game.create
  p params
  # need to fix avatar_id and clean up won in this if loop
  if params[@user_one.name] > params[@user_two.name]
    @game.played_games.create(user_id: @user_one.id, score: params[@user_one.name], avatar_id: 1, won: true)
    @game.played_games.create(user_id: @user_two.id, score: params[@user_two.name], avatar_id: 2, won: false)
  else
    @game.played_games.create(user_id: @user_one.id, score: params[@user_one.name], avatar_id: 1, won: false)
    @game.played_games.create(user_id: @user_two.id, score: params[@user_two.name], avatar_id: 2, won: true)
  end
  erb :score_screen, layout: false
  # content_type: :json
  # { success: "success" }.to_json
end

get '/scorescreen' do
  @played_games = PlayedGame.all.order(created_at: :desc)
  erb :score_screen
end
