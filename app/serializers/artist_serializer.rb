class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :bio, :genre_list
  has_many :releases

  def genre_list
    object.genres.pluck(:name)
  end
end
