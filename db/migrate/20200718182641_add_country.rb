class AddCountry < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :country, :string, null: false
  end
end
