class CreateHopdongmuahangs < ActiveRecord::Migration[5.2]
  def change
    create_table :hopdongmuahangs do |t|
      t.integer :trangthaihd
      t.references :khachang, foreign_key: true

      t.timestamps
    end
  end
end
