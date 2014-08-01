get '/login' do
  erb :login
end

post '/login' do
  @user_one = User.find_by(email: params[:email_one])
  @user_two = User.find_by(email: params[:email_two])
  if @user_one && @user_one.authenticate(params[:password_one]) &&
     @user_two && @user_two.authenticate(params[:password_two])
    session[:user_one] = @user_one.id
    session[:user_two] = @user_two.id
    redirect '/'
  else
    @errors = "Please enter a valid email/password combo"
    erb :login
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
    erb :login
  end
end

get '/logout' do
  session.clear
  redirect '/login'
end
