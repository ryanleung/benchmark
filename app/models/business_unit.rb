class BusinessUnit < ApplicationRecord
  belongs_to :company
  has_many :metrics
end
