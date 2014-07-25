class User < ActiveRecord::Base
  has_secure_password
  has_many :scores
  has_many :games, through: :scores

  validates_uniqueness_of :name, :email
end
