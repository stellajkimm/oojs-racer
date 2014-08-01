User.create(name: "stella", email: "stella@stella.stella", password: "stella")
User.create(name: "armen", email: "armen@armen.armen", password: "armen")


# 5.times{ User.create(name:     Faker::Name.name,
#                      email:    Faker::Internet.email,
#                      password: Faker::Internet.password) }


Avatar.create(name: "narwhal", image_url: "http://fc04.deviantart.net/fs70/f/2013/140/9/8/cute_little_narwhal_by_fallenstar20-d65z1e4.png")
Avatar.create(name: "moon", image_url: "http://www.jojopix.com/wp-content/uploads/2014/06/moon-clip-art-10.gif")
Avatar.create(name: "hippo", image_url: "http://bestclipartblog.com/clipart-pics/hippopotamus-clipart-14.jpg")
Avatar.create(name: "nyan cat", image_url: "http://img1.wikia.nocookie.net/__cb20130608144609/anime-arts/images/7/7a/Nyan_cat_by_kkiittuuss-d4k5mf8.png")

# 10.times{ Game.create(winner: User.all.sample.name) }

# Game.all.each do |game|
#   users = User.all.sample(2)
#   game.played_games.create(score: 21, user_id: users[0].id, won: true, avatar_id: rand(1..4))
#   game.played_games.create(score: rand(2..20), user_id: users[1].id, won: false, avatar_id: rand(1..4))
# end
