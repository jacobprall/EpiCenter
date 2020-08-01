class User 
  include Neo4j::ActiveNode
  #Properties
  property :fname, type: String
  property :lname, type: String
  property :email, type: String
  property :pass_digest, type: String
  property :session_token, type: String 
  property :dob, type: String
  property :age, type: Integer 
  property :gender, type: String 
  property :city, type: String 
  property :state, type: String 
  property :country, type: String 
  property :bio, type: String 
  
  include Neo4j::Timestamps::Created # will give model created_at timestamp
  
  after_initialize :ensure_session_token
  # after_validation :set_age
  attr_reader :password, :current_status
  #validations
  validates :fname, :lname, :pass_digest, :session_token, :dob, :gender, :city, :country, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  
  #Associations
  # has_many :both, :connections, type: :connection, rel_class: :Connection
 
  has_many :in, :updates, origin: :user

  #Auth

  def self.find_by_credentials(email, pw)
    @user = User.find_by(email: email)
    if @user && @user.is_password?(pw)
      @user 
    else
      nil
    end
  end

  def password=(pw)
    @password = pw
    self.pass_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.pass_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token 
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def current_status
    @current_status = self.updates[0]
  end

  # def set_age 
  #   # self.age = ((Time.zone.now - self.dob.to_time) / 1.year.seconds).floor
  #   age = Date.today.year - self.dob.year
  #   age -= 1 if Date.today < self.dob.day + age.years #for days before birthday
  # end

end
