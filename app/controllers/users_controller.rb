class UsersController < ApplicationController
  before_action :set_items, only: [:show, :in_progress, :completed, :purchace, :purchased]
  before_action :set_item_search_query, except: :index
  
  def index
  end

  def show
    @user = User.find(current_user.id)
  end

  def edit
    @card = Card.where(user_id: current_user.id).first
  end
  
  def notification
  end

  def todo
  end

  def in_progress
  end

  def completed
  end

  def purchase
  end

  def purchased
  end

  def log_out
  end

  private

    def user_params
      params.require(:user).permit(:nickname, :email)
    end

    def set_items
      @item = Item.where(seller_id: current_user)
      @buy = Item.where(buyer_id: current_user)
      @card = Card.where(user_id: current_user.id).first
    end

end
