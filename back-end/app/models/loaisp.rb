class Loaisp < ApplicationRecord
  has_many :sanphams
  rails_admin do
    label_plural "Loại sản phẩm"
    field :id do
      read_only true
    end
    field :ten do
      label "Tên"
    end
    field :sanphams do
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