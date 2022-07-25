class FavoriteArtistsController < ApplicationController
  def index
    if session[:user_id]
      user = User.find(session[:user_id])
      render json: user.artists
    else
    end
  end

  def create
    newFave = FavoriteArtist.create!(favorite_params)
    render json: newFave, status: 201
  end

  private

  def favorite_params
    params.permit(:artist_id, :user_id)
  end
end
