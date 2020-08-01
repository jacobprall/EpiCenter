class Update 
  include Neo4j::ActiveNode
  property :curr_status, type: Integer 
  property :curr_health, type: Integer
  property :last_tested, type: Date
  property :last_test_result, type: Integer
  property :next_test, type: Integer
  property :post_text, type: String
  property :post_image_url, type: String

  validates_presence_of :curr_status, :curr_health, :last_tested, :last_test_result, :next_test

  # has_one :out, :status, type: :status 
  has_one :out, :user, type: :user, model_class: :User
  
  
  def connect_user(user)
    self.user = user
  end

  def set_current_status(user)
    self.user = user
    self.user.updates << self
    self.user.current_status
  end

  # def connect_status
  #   self.status = self.user.status
  # end
  

  # def update_status
  #   self.status.curr_status = self.curr_status
  #   self.status.curr_health = self.curr_health
  #   self.status.last_tested = self.last_tested
  #   self.status.last_test_result = self.last_test_result
  #   self.status.next_test = self.next_test
  # end

 


  LAST_TEST_RESULT_CODE = {
    0 => "Pending",
    1 => "Negative",
    2 => "Positive",
    3 => "None"
  }
  
  CURR_STATUS_CODE = {
    0 => "Quarantine",
    1 => "Strict Quarantine",
    2 => "Hospitalized"
  }

  CURR_HEALTH_CODE = {
    0 => "Healthy",
    1 => "Asymptomatic",
    2 => "Sick",
    3 => "Infected"
  }

  NEXT_TEST_CODE = {
    0 => "Within the next two weeks",
    1 => "More than two weeks",
    2 => "None planned"
  }






end
