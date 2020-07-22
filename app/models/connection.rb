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
class Connection < ApplicationRecord
    validates :user_id, :connected_id, :relationship, :status, presence: true
    validates :user_id, uniqueness: { scope: :connected_id }

    belongs_to :user 

    belongs_to :connected,
    foreign_key: :connected_id,
    class_name: :User
end
