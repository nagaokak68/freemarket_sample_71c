class Item < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :user
  has_one :order
  #belongs_to :category
  #has_many :images, dependent: :destroy
  #has_many :comments, dependent: :destroy
  #has_many :likes, dependent: :destroy
  #belongs_to_active_hash :postage
  
end
