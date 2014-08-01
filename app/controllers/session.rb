get '/login' do
  erb :'login/_login'
end

post '/login' do
  @user_one = User.find_by(email: params[:email])
  p @user_one
  if @user_one && @user_one.authenticate(params[:password])
    session[:user_one] = @user_one.id
    # @user_one.played_games.new(avatar_id: params[:avatar])
    erb :'login/_login'
  else
    @errors = "Please enter a valid email/password combo"
    erb :'login/_login'
  end
end

post '/login_two' do
  @user_two = User.find_by(email: params[:email])
  if @user_two && @user_two.authenticate(params[:password])
    session[:user_two] = @user_two.id
    # @user_two.played_games.new(avatar_id: params[:avatar])
    erb :'login/_login'
  else
    @errors = "Please enter a valid email/password combo"
    erb :'login/_login'
  end
end

post '/signup' do
  @user = User.new(params[:user])
  if @user.valid?
    @user.save
    session[:user_id] = @user.id
    redirect '/login'
  else
    @errors = @user.errors.messages
    erb :'login/_login'
  end
end

get '/logout' do
  session.clear
  redirect '/login'
end
