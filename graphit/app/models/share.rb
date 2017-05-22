class Share < ApplicationRecord
  validates :user, :graph, presence: true

  belongs_to :user
  belongs_to :graph

end
