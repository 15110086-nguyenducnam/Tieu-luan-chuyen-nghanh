class RenameBanggiaToBanggias < ActiveRecord::Migration[5.2]
  def change
    rename_table :banggia, :banggias
  end
end
