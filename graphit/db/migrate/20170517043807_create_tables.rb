class CreateTables < ActiveRecord::Migration[5.0]
  def change
    create_table :tables do |t|
      t.integer :owner_id, null: false, index: true
      t.string :title, null: false
      t.json :content, null: false

      t.timestamps
    end
  end
end
