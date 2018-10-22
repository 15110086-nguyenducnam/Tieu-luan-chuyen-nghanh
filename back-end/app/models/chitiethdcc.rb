class Chitiethdcc < ApplicationRecord
  belongs_to :hopdongcc
  belongs_to :sanpham

  rails_admin do
    label_plural "Chi tiết hợp đồng cung cấp"
    
    field :id do
      read_only true
    end
    field :soluong do
      label "Số lượng"
    end
    field :dongia do
      label "Đơn giá"
    end
    field :hopdongcc do
      label "Hợp đồng cung cấp"
    end
    field :sanpham do
      label "Sản phẩm"
    end
    field :created_at do
      read_only true
    end
    field :updated_at do
      read_only true
    end
  end
end
