class FavoriteArtist < ApplicationRecord
  belongs_to :user
  belongs_to :artist

  validates :user, uniqueness: { scope: :artist, message: 'can only add item to favorites once' }
end
