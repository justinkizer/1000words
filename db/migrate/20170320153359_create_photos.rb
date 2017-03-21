class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.text :img_url, null: false
      t.integer :owner_id, null: false
      t.text :description
      t.timestamps
    end
    add_index :photos, :img_url
    add_index :photos, :owner_id
  end
end
