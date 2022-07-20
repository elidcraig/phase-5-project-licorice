class UsersController < ApplicationController

  before_action :current_user, only: :show

  def show
    if @current_user
      render json: @current_user
    else
      render json: { errors: ['No user is logged in'] }, status: 401
    end
  end

  def create
    new_user = User.create! user_params
    session[:user_id] = new_user.id
    render json: new_user, status: 201
  end

  private

  def user_params
    params.permit(
      :username,
      :password,
      :password_confirmation,
      :email,
      :avatar_url,
      :location,
      :bio
    )
  end
end
