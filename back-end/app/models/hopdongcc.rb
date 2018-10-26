class Hopdongcc < ApplicationRecord
  belongs_to :nhacc
  has_many :chitiethdccs
  has_many :sanphams, through: :chitiethdccs

  rails_admin do
    label_plural "Hợp đồng cung cấp"
    field :id do
      read_only true
    end
    field :trangthaihd do
      label "Trạng thái HD"
    end
    field :nhacc do
      label "Nhà CC"
    end
    field :chitiethdccs do
      label "Chi tiết HDCC"
    end
    field :created_at do
      read_only true
    end
    field :updated_at do
      read_only true
    end
  end
end
