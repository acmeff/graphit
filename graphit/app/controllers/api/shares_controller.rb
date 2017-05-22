class Api::SharesController < ApplicationController
  def create
    @share = Share.new(share_params)
    if @share
      render 'api/graphs/show'
    else
      render json: @share.errors.full_messages, status: 422
    end
  end

  def destroy
    @share = Share.find(params[:id])
    @share.destroy
  end

  def index
    @shares = Share.where(user_id: current_user.id)
  end

  private

  def user_params
    params.require(:share).permit(:user_id, :graph_id)
  end
end
