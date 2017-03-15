class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login_user!(@user)
      render "api/users/show"
    else
      render json: ["Username/Password combination not found"], status: 401
    end
  end

  def destroy
    if !current_user
      render json: ["There is not a user currently logged in"], status: 404
    else
      logout_user!
      render json: {}
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
