class Photo < ApplicationRecord

  validates :img_url, :owner_id, presence: true

  belongs_to :user,
    foreign_key: :owner_id

end
