class ReleaseGenreSerializer < ActiveModel::Serializer
  attributes :id
  has_one :genre
  has_one :release
end
