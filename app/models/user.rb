class User < ActiveRecord::Base
  has_secure_password
  has_many :played_games
  has_many :games, through: :played_games

  validates_uniqueness_of :name, :email
end
