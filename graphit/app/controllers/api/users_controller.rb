class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      table2 = Table.last
      new_table2 = Table.create(title: table2.title,
                                content: table2.content,
                                format: table2.format,
                                owner_id: @user.id)
      graph = table2.graphs.last
      new_graph = Graph.create(title: graph.title,
                               x_data: graph.x_data,
                               y_data: graph.y_data,
                               table_id: new_table2.id,
                               owner_id: @user.id,
                               format: graph.format)
      table = Table.first
      new_table = Table.create(title: table.title,
                               content: table.content,
                               format: table.format,
                               owner_id: @user.id)
      graph = table.graphs.first
      new_graph = Graph.create(title: graph.title,
                               x_data: graph.x_data,
                               y_data: graph.y_data,
                               table_id: new_table.id,
                               owner_id: @user.id,
                               format: graph.format)
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
