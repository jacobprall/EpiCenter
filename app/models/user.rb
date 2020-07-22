# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  bio             :text
#  birthdate       :string           not null
#  city            :string           not null
#  country         :string           not null
#  email           :string           not null
#  fname           :string           not null
#  gender          :string           not null
#  lname           :string           not null
#  password_digest :string           not null
#  session_token   :string
#  state           :string
#  created_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email            (email) UNIQUE
#  index_users_on_lname            (lname)
#  index_users_on_password_digest  (password_digest)
#  index_users_on_session_token    (session_token)
#
class User < ApplicationRecord
    #validations
    validates :email, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :city, :country, :fname, :lname, :gender, :birthdate, presence: true
    
    #associations and attr methods
    attr_reader :password

    has_many :connects,
    foreign_key: :user_id,
    class_name: :Connection

    has_many :connections,
    through: :connects,
    source: :connected

    #after initialize
    after_initialize :ensure_session_token

    #########
    #Auth

    def self.find_by_credentials(email, pw)
        user = User.find_by(email: email)
        user && user.is_password?(pw) ? user : nil
    end

    def password=(pw)
        @password = pw 
        self.password_digest = BCrypt::Password.create(pw)
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64 
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64 
    end
    #######
    
    

end
