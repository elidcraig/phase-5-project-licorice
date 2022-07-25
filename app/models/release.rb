class Release < ApplicationRecord
  belongs_to :artist
  has_many :release_genres
  has_many :genres, through: :release_genres
  has_many :favorite_releases
  has_many :users, through: :favorite_releases
end
