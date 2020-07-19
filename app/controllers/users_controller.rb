class UsersController < ApplicationController
   before_action :require_logged_on, only: [:show, :edit, :update, :destroy]
   #CRUD
    def new
        @user = User.new
        render :new 
    end

    def create
        @user = User.new(user_params)
        if @user.save!
            login!(@user)
        else
            flash[:errors] = @user.errors.full_messages
            render :new 
        end
    end
    def index
        render :index
    end

    def show
        render :show
    end

    def edit
        render :edit if current_user.id == User.find(params[:id])
    end

    def update
        if current_user.id == User.find(params[:id])
            @user = User.update(user_params)
        end
        if @user.save!
            redirect_to user_url(@user.id)
        else
            flash[:errors] = @user.errors.full_messages
            render :edit
        end
    end

    def destroy
        @user = User.find(params(:id))
        @user.delete
        logout!
    end


    private
    def user_params
        params.require(:user).permit(:email, :password, :fullname, :city, :state, :country, :age)
    end
end
