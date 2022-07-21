class ReleaseSerializer < ActiveModel::Serializer
  attributes :id, :title, :release_date, :artwork_url, :release_type
  has_one :artist
end
