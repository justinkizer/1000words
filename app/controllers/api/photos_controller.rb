class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.new(photo_params)
    @photo.owner_id = current_user.id
    if @photo.save
      render "api/photos/show", status: 200
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def index
    if params[:user_id]
      @photos = User.find(params[:user_id]).photos.each do |photo|
        photo.img_url = photo.img_url.split("/upload/").join("/upload/w_0.50/")
      end
    else
      @photos = Photo.all.each do |photo|
        photo.img_url = photo.img_url.split("/upload/").join("/upload/w_0.50/")
      end
    end
    render :index
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def update
    @photo = Photo.find(params[:id])
    if current_user.id == @photo.owner_id && @photo.update(photo_params)
      render "api/photos/show", status: 200
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    if current_user.id == @photo.owner_id
      @photo.destroy
      render json: ["Photo deleted"], status: 200
    else
      render json: ["You must be logged in and be the photo's owner to delete"], status: 401
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:img_url, :description)
  end

end
