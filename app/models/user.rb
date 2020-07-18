# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  age             :integer          not null
#  city            :string           not null
#  country         :string           not null
#  email           :string           not null
#  fullname        :string           not null
#  password_digest :string           not null
#  session_token   :string
#  state           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_fullname  (fullname)
#
class User < ApplicationRecord
    #validations
    validates :email, :password_digest, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :fullname, presence: true, length: { minimum: 4, allow_nil: true } 
    validates :city, :country, :state, presence: true, length: { minimum: 2, allow_nil: true }
    validates :age, presence: true
    #associations and attr methods
    attr_reader :password

    #after initialize
    after_initialize :ensure_session_token

    #########
    #SPIRE

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
