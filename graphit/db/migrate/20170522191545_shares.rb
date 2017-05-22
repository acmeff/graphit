class Shares < ActiveRecord::Migration[5.0]
  def change
    create_table :shares do |t|
      t.integer :user_id, null: false, index: true
      t.integer :graph_id, null: false, index: true


      t.timestamps
    end
  end
end
