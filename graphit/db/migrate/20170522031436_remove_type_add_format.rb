class RemoveTypeAddFormat < ActiveRecord::Migration[5.0]
  def change
    remove_column :graphs, :type
    add_column :graphs, :format, :string, null: false
  end
end
