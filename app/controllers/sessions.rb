get '/login' do
  erb :login
end

get 'logout' do
  session.clear
  redirect '/login'
end
