class Game < ActiveRecord::Base
  has_many :scores
  has_many :users, through: :scores

  validate :has_two_players, on: :update

  def has_two_players # doesn't work
    errors.add(:players, "No more than two players per game") if self.players.size > 2
  end
end
