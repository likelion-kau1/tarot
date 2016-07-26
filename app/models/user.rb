class User < ActiveRecord::Base
  has_many :picks
end
