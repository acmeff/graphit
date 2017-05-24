class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :tables,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :Table

  has_many :graphs,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :Graph

  has_many :shares,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Share

  has_many :shared_shares,
  primary_key: :id,
  foreign_key: :sharer_id,
  class_name: :Share

  has_many :graphs_shared_with,
  through: :shares,
  source: :graph

  has_many :graphs_shared,
  through: :shared_shares,
  source: :graph

  attr_reader :password

  after_initialize :ensure_session_token

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(username,password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    end
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
