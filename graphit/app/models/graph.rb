class Graph < ApplicationRecord
  validates :title, :owner, :table, :x_data, :y_data, :format, presence: true
  validates :format, inclusion: {in: ['bar', 'line', 'spline', 'area'],
                               message: 'Must be a bar, line, spline, or area graph'}

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  belongs_to :table,
  primary_key: :id,
  foreign_key: :table_id,
  class_name: :Table

  has_many :shares
end
