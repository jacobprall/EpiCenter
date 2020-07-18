class AddAgeCol < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :age, :integer, null: false
  end
end
