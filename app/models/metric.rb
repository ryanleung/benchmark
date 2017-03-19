class Metric < ApplicationRecord
  belongs_to :metric_type
  belongs_to :metric_name
  belongs_to :function
  belongs_to :company
  belongs_to :industry
  belongs_to :user
  belongs_to :business_unit
end
