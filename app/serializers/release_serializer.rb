class ReleaseSerializer < ActiveModel::Serializer
  attributes :id, :title, :release_date, :artwork_url, :type
  has_one :artist
end
