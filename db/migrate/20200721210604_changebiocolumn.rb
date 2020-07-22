class Changebiocolumn < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :bio, :text, null: true
  end
end
