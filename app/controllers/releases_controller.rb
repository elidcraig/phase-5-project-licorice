class ReleasesController < ApplicationController
  def index
    results = Release.where("title LIKE ?", "%#{ params[:search] }%")
    render json: results
  end

  def show
    render json: Release.find(params[:id])
  end
end
