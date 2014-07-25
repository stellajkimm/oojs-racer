5.times{ User.create(name:     Faker::Name.name,
                     email:    Faker::Internet.email,
                     password: Faker::Internet.password) }

10.times{ Game.create(winner: User.all.sample.name) }

Game.all.each do |game|
  2.times do
    PlayedGame.create(score:   rand(10),
                      user_id: User.all.sample.id,
                      game_id: game.id)
  end
end
