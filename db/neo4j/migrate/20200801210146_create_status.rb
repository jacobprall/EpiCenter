class CreateStatus < Neo4j::Migrations::Base
  def up
    add_constraint :Status, :uuid
  end

  def down
    drop_constraint :Status, :uuid
  end
end
