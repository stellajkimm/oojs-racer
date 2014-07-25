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
  erb :score_screen
end
