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
require 'rails_helper'

RSpec.describe User, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
