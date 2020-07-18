class ChangeStateNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:users, :state, true)
  end
end
