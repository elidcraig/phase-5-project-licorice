class ReleaseReviewSerializer < ActiveModel::Serializer
  attributes :id, :body
  has_one :user
  has_one :release
end
