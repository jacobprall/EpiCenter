class CreateConnections < ActiveRecord::Migration[5.2]
  def change
    create_table :connections do |t|
      t.integer :user_id, null: false
      t.integer :connected_id, null: false 
      t.integer :status, null: false 
      t.integer :relationship, null: false 
      
      t.timestamps
    end
  end
end
