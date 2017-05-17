class Table < ApplicationRecord
  validates :owner_id, :content, :title, presence: true

  belongs_to :owner, primary_key: :id, foreign_key: :owner_id
end
