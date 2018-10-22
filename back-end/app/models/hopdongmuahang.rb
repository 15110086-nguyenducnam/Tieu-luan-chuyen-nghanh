class Hopdongmuahang < ApplicationRecord
  belongs_to :khachhang
  has_many :chitiethdmuahangs
  has_many :sanphams, through: :chitiethdmuahangs

  rails_admin do
    label_plural "Hợp đồng mua hàng"
    field :id do
      read_only true
    end
    field :trangthaihd do
      label "Trạng thái HD"
    end
    field :khachhang do
      label "Khách hàng"
    end
    field :created_at do
      read_only true
    end
    field :updated_at do
      read_only true
    end
  end
end