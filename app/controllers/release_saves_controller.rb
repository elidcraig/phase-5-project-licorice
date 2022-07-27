class ReleaseSavesController < ApplicationController

  def index
    if session[:user_id]
      user = User.find(session[:user_id])
      render json: user.saved_releases
    end
  end

  def create
    newSave = ReleaseSave.create!(save_params)
    render json: newSave, status: 201
  end

  private

  def save_params
    params.permit(:release_id, :user_id)
  end
end
