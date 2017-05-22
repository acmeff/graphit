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
    @graphs = Graph.all
  end

  def delete
    @graph = Graph.find(params[:id])
    @graph.destroy
  end

  private
  def graph_params
    permit(:graph).require(:title, :table_id, :type)
  end
end
