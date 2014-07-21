class Game < ActiveRecord::Base
  has_many :scores
  has_many :players, through: :scores
end
