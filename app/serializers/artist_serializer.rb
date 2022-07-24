class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :bio
  has_many :releases
end
