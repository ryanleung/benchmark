class Industry < ApplicationRecord
  has_many :companies
  has_many :metrics
end
