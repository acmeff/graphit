class Api::GraphsController < ApplicationController
  def create
    @graph = Graph.new(graph_params)
    @graph.owner_id = current_user.id
    @graph.x_data = params[:graph][:x_data]
    @graph.y_data = params[:graph][:y_data]
    if @graph.save
      render :show
    else
      render json: @graph.errors.full_messages, status: 422
    end
  end

  def show
    @graph = Graph.find(params[:id])
  end

  def index
    @graphs = Graph.where(owner_id: current_user.id)
  end

  def destroy
    @graph = Graph.find(params[:id])
    @graph.destroy
    render :show
  end

  private
  def graph_params
    params.require(:graph).permit(:title, :table_id, :format)
  end
end
