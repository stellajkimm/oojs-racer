get '/login' do
  erb :login
end

post '/login' do
  @user = User.find_by(email: params[:email])
  if @user && @user.authenticate(params[:password])
    session[:user_id] = @user.id
    redirect '/'
  else
    @errors = @user.errors
    erb :login
  end
end

post '/signup' do
  @user = User.new(params[:user])
  if @user.valid?
    @user.save
    session[:user_id] = @user.id
    redirect '/'
  else
    @errors = @user.errors
    erb :login
  end
end

get 'logout' do
  session.clear
  redirect '/login'
end
