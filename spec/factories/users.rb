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
FactoryBot.define do
  factory :user do
    
  end
end
