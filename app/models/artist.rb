class Artist < ApplicationRecord
  has_many :releases
  has_many :artist_genres
  has_many :genres, through: :artist_genres
  has_many :favorite_artists
  has_many :users, through: :favorite_artists
end
