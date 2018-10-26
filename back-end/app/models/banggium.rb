class Banggium < ApplicationRecord
  belongs_to :sanpham

  rails_admin do
    label_plural "Bảng giá"
    
    field :id do
      read_only true
    end
    field :gia do
      label "Giá"
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
