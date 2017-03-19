class Company < ApplicationRecord
  belongs_to :industry
  has_many :business_units
  has_many :metrics
end
