class ArtistsController < ApplicationController
  def index
    results = Artist.where("title LIKE ?", "%#{ params[:search] }%")
    render json: results
  end

  def show
    render json: Artist.find(params[:id])
  end
end
