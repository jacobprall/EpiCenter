class AddUserCityState < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :city, :string, null: false
    add_column :users, :state, :string, null: false 
    remove_column :users, :first_name
    add_column :users, :fullname, :string, null: false
    add_index :users, :fullname
  end
end
