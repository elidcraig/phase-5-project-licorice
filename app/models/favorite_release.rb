class FavoriteRelease < ApplicationRecord
  belongs_to :user
  belongs_to :release

  validates :user, uniqueness: { scope: :release, message: 'can only add item to favorites once' }
end
