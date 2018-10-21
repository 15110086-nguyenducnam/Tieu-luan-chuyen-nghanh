class CreateLoaisps < ActiveRecord::Migration[5.2]
  def change
    create_table :loaisps do |t|
      t.string :ten
      t.string :sp

      t.timestamps
    end
  end
end
