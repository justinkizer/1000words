class Api::FollowingsController < ApplicationController

  def create
    @following = Following.new(following_params)
    @following.follower_id = current_user.id
    if @following.save
      render json: @following, status: 200
    else
      render json: @following.errors.full_messages, status: 422
    end
  end

  def index
    @followed_photos = User.find(params[:user_id]).followed_photos
      .sort_by(&:created_at)
    render :index
  end

  def show
    @follows = current_user.followees
  end

  def destroy
    @following = Following.find_by(followee_id: following_params[:followee_id],
                                   follower_id: current_user.id)
    if @following.destroy
      render json: ["User unfollowed"], status: 200
    else
      render json: ["An error occured - Please try again"], status: 401
    end
  end

  private

  def following_params
    params.require(:following).permit(:followee_id)
  end

end
