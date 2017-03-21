class AddCoverImageToUsersTable < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :cover_img_url, :text
    add_index :users, :cover_img_url
  end
end
