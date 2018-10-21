class CreateChitiethdmuahangs < ActiveRecord::Migration[5.2]
  def change
    create_table :chitiethdmuahangs do |t|
      t.integer :sonluong
      t.decimal :dongia
      t.references :hopdongmuahang
      t.references :chitiethdcc, foreign_key: true

      t.timestamps
    end
  end
end
