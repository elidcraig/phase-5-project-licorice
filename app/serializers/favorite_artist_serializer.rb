class FavoriteArtistSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :artist
end
