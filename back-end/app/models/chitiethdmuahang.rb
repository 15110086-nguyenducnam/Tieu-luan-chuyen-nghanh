class Chitiethdmuahang < ApplicationRecord
  belongs_to :sanpham
  belongs_to :hopdongmuahang

  rails_admin do
    label_plural "Chi tiết hợp đồng mua hàng"
    field :id do
      read_only true
    end
    field :soluong do
      label "Số lượng"
    end
    field :dongia do
      label "Đơn giá"
    end
    field :sanpham do
      label "Sản phẩm"
    end
    field :hopdongmuahang do
      label "Hợp đồng mua hàng"
    end
    field :created_at do
      read_only true
    end
    field :updated_at do
      read_only true
    end
  end
end