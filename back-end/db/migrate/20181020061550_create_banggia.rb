class CreateBanggia < ActiveRecord::Migration[5.2]
  def change
    create_table :banggias do |t|
      t.references :sanpham, foreign_key: true
      t.string :thoidiem
      t.string :string
      t.decimal :gia

      t.timestamps
    end
  end
end
