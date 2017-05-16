class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:username], params[:password])
    if @user
      login(@user)
      render 'users/show'
    else
      render json: ["Invalid username or password"], status 422
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render status: 404
    end
  end
end
