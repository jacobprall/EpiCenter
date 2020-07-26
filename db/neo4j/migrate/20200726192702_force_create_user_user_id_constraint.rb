class ForceCreateUserUserIdConstraint < Neo4j::Migrations::Base
  def up
    add_constraint :User, :user_id, force: true
  end

  def down
    drop_constraint :User, :user_id
  end
end
