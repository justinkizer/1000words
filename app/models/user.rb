class User < ApplicationRecord

  attr_reader :password

  before_validation :ensure_session_token

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :photos,
    foreign_key: :owner_id

  has_many :follows,
    class_name: :Following,
    foreign_key: :followee_id

  has_many :followings,
    class_name: :Following,
    foreign_key: :follower_id

  has_many :followers,
    through: :follows,
    source: :follower

  has_many :followees,
    through: :followings,
    source: :followee

  has_many :followed_photos,
    through: :followees,
    source: :photos

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return @user if @user && @user.is_password?(password)
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    self.save
    self.password_digest
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
