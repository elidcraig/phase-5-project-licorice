class ArtistGenreSerializer < ActiveModel::Serializer
  attributes :id
  has_one :genre
  has_one :artist
end
