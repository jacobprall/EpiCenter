class CreateUserTable < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token
      t.text :bio, null: false
      t.integer :gender, null: false
      t.string :birthdate, null: false
      t.string :city, null: false
      t.string :state
      t.string :country, null: false
      
      t.timestamp

    end
    add_index :users, :lname 
    add_index :users, :email, unique: true
    add_index :users, :password_digest
    add_index :users, :session_token
  end
end
