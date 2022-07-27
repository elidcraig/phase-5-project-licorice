class ReleaseReviewsController < ApplicationController

  def index
    if session[:user_id]
      user = User.find(session[:user_id])
      render json: user.release_reviews
    end
  end

  def create
    new_review = ReleaseReview.create!(review_params)
    render json: new_review, status: 201
  end

  private

  def review_params
    params.permit(:user_id, :release_id, :body)
  end
end
