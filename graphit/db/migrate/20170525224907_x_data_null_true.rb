class XDataNullTrue < ActiveRecord::Migration[5.0]
  def change
    change_column :graphs, :x_data, :json, null: true
  end
end
