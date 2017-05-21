class AddTableType < ActiveRecord::Migration[5.0]
  def change
    add_column :tables, :format, :string, null: false
  end
end
