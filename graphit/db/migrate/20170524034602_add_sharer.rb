class AddSharer < ActiveRecord::Migration[5.0]
  def change
    add_column :shares, :sharer_id, :integer, null: false
  end
end
