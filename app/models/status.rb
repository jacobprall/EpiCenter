# class Status 
#   include Neo4j::ActiveNode
#   property :last_tested, type: Date
#   property :last_test_result, type: Integer 
#   property :curr_status, type: Integer 
#   property :curr_health, type: Integer
#   property :next_test, type: Integer 

#   LAST_TEST_RESULT_CODE = {
#     0 => "Pending",
#     1 => "Negative",
#     2 => "Positive",
#     3 => "None"
#   }
  
#   CURR_STATUS_CODE = {
#     0 => "Quarantine",
#     1 => "Strict Quarantine",
#     2 => "Hospitalized"
#   }

#   CURR_HEALTH_CODE = {
#     0 => "Healthy",
#     1 => "Asymptomatic",
#     2 => "Sick",
#     3 => "Infected"
#   }

#   NEXT_TEST_CODE = {
#     0 => "Within the next two weeks",
#     1 => "More than two weeks",
#     2 => "None planned"
#   }
#   validates_presence_of :last_tested, :last_test_result, :curr_status, :curr_health, :next_test
#   validates :curr_status, inclusion: { in: 0..2 }
#   validates :curr_health, inclusion: { in: 0..3 }
#   validates :next_test, inclusion: { in: 0..2 }
#   validates :last_test_result, inclusion: { in: 0..2 }


#   # has_one :out, :user, type: :user, model_class: :User, unique: true

#   def connect_user(user)
#     self.user = user
#   end


# end
