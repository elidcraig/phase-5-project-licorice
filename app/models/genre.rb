class Genre < ApplicationRecord
  has_many :artist_genres
  has_many :release_genres
  has_many :artists, through: :artist_genres
  has_many :releases, through: :release_genres
end
