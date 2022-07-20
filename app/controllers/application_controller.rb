class ApplicationController < ActionController::API
  include ActionController::Cookies

  wrap_parameters false

  rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid

  private

  def handle_not_found exception
    render json: { error: "#{ exception.model } not found" }, status: 404
  end

  def handle_invalid exception
    render json: { errors: exception.record.errors.full_messages }, status: 422
  end
end
