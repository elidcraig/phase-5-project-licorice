class ArtistsController < ApplicationController
  def index
    render json: Artist.all
  end

  def show
    render json: Artist.find params[:id]
  end
end
