# == Schema Information
#
# Table name: connections
#
#  id           :bigint           not null, primary key
#  relationship :integer          not null
#  status       :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  connected_id :integer          not null
#  user_id      :integer          not null
#
require 'rails_helper'

RSpec.describe Connection, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
