class Table < ApplicationRecord
  validates :owner_id, :content, :title, :format, presence: true
  validates :format, inclusion: {in: ['csv'], message: "must be a csv file"}

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  has_many :graphs, dependent: :destroy

end
