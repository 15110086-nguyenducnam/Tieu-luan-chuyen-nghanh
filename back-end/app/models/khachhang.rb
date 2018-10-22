class Khachhang < ApplicationRecord
  belongs_to :loaikh
  has_many :hopdongmuahangs

  rails_admin do
    label_plural "Khách hàng"
    field :id do
      read_only true
    end
    field :ho do
      label "Họ"
    end
    field :ten do
      label "Tên"
    end
    field :loaikh do
      label "Loại khách hàng"
    end
    field :created_at do
      read_only true
    end
    field :updated_at do
      read_only true
    end
  end
end
