class CreateKhachangs < ActiveRecord::Migration[5.2]
  def change
    create_table :khachangs do |t|
      t.string :ho
      t.string :ten
      t.references :loaikh, foreign_key: true

      t.timestamps
    end
  end
end
