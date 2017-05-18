class Api::TablesController < ApplicationController
  def create
    @table = Table.new(table_params)
    @table.content = params[:table][:content]
    # @table.owner_id = current_user.id
    if @table.save
      render :show
    else
      render json: @table.errors.full_messages, status: 422
    end
  end

  def destroy
    @table = Table.find(params[:id])
    @table = @table.destroy
    render :show
  end

  def show
    @table = Table.find(params[:id])
    render :show
  end

  def index
    @tables = Table.all
    render :index
  end

  private

  def table_params
    params.require(:table).permit(:title)
  end
end
