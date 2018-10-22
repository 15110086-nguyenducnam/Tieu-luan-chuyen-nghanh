class Sanpham < ApplicationRecord
  belongs_to :loaisp
  has_many :banggium
  has_many :chitiethdccs
  has_many :hopdongccs, through: :chitiethdccs
  has_many :chitiethdmuahangs
  has_many :hopdongmuahangs, through: :chitiethdmuahangs

  rails_admin do
    label_plural "Sản phẩm"
    field :id
    field :tensp do
      label "Tên"
    end
    field :loaisp do
      label "Loại SP"
    end
    field :created_at
    field :updated_at
  end
end
