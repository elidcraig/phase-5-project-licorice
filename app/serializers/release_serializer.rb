class ReleaseSerializer < ActiveModel::Serializer
  attributes :id, :title, :release_date, :artwork_url, :release_type, :genre_list
  has_one :artist

  def genre_list
    object.genres.pluck(:name)
  end
end
