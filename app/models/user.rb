class User < ApplicationRecord
  has_secure_password

  has_many :favorite_artists
  has_many :favorite_releases
  has_many :artists, through: :favorite_artists
  has_many :releases, through: :favorite_releases

  validates :username, presence: true, uniqueness: true
end
