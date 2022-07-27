class User < ApplicationRecord
  has_secure_password

  has_many :favorite_artists
  has_many :favorite_releases
  has_many :artists, through: :favorite_artists
  has_many :releases, through: :favorite_releases

  has_many :release_saves, class_name: "ReleaseSave"
  has_many :saved_releases, through: :release_saves, source: :release

  validates :username, presence: true, uniqueness: true
end
