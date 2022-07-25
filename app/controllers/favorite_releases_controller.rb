class FavoriteReleasesController < ApplicationController
  def index
    if session[:user_id]
      user = User.find(session[:user_id])
      render json: user.releases
    else
    end  
  end

  def create
    newFave = FavoriteRelease.create!(favorite_params)
    render json: newFave, status: 201
  end

  private

  def favorite_params
    params.permit(:release_id, :user_id)
  end
end
