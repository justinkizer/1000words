class Following < ApplicationRecord

  belongs_to :follower,
    class_name: :User,
    foreign_key: :follower_id

  belongs_to :followee,
    class_name: :User,
    foreign_key: :followee_id

  validates :follower_id, :followee_id, presence: true
  validates :follower_id, uniqueness: { scope: :followee_id }

end
