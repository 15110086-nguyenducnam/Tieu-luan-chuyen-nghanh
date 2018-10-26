class Loaisp < ApplicationRecord
  has_many :sanphams, inverse_of: :loaisp

  def display_name
    "#{self.ten}"
  end
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
      #  enum do
      #   self.sanphams.collect {|p| [p.ten, p.id]}
      # end
    end
    field :created_at do
      read_only true
    end
    field :updated_at do
      read_only true
    end
  end
end
