class Share < ApplicationRecord
  validates :user, :graph, :sharer, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User
  belongs_to :graph
  belongs_to :sharer,
  primary_key: :id,
  foreign_key: :sharer_id,
  class_name: :User

end
