class CreateGraphs < ActiveRecord::Migration[5.0]
  def change
    create_table :graphs do |t|
      t.string :title, null: false, index: true
      t.json :x_data, null: false
      t.json :y_data, null: false
      t.integer :owner_id, null: false, index: true
      t.integer :table_id, null: false, index: true
      t.string :type, null: false

      t.timestamps
    end
  end
end
