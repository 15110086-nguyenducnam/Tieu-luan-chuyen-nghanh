class Hopdongcc < ApplicationRecord
  belongs_to :nhacc
  has_many :chitiethdccs
  has_many :sanphams, through: :chitiethdccs

  rails_admin do
    label_plural "Hợp đồng cung cấp"
  end
end
