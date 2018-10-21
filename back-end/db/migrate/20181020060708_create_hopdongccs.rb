class CreateHopdongccs < ActiveRecord::Migration[5.2]
  def change
    create_table :hopdongccs do |t|
      t.boolean :trangthaidh
      t.references :nhacc, foreign_key: true

      t.timestamps
    end
  end
end
