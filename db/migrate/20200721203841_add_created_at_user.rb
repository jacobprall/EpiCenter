class AddCreatedAtUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :created_at, :timestamp, null: false
  end
end
