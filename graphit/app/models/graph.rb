class Graph < ApplicationRecord
  validates :title, :owner, :table_id, :x_data, :y_data, :format, presence: true
  validates :format, inclusion: {in: ['bar', 'line', 'spline', 'area', 'pie', 'donut'],
                               message: 'Must be a bar, line, spline, pie, donut, or area graph'}

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  belongs_to :table,
  primary_key: :id,
  foreign_key: :table_id,
  class_name: :Table

  has_many :shares, dependent: :destroy
end
