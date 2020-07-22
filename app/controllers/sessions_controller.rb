class SessionsController < ApplicationController
    before_action :require_logged_on, only: [:destroy]

    def new
        render :new
    end



    def create
        user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if user 
            login!(user)
            
        else
            flash[:errors] = ['Invalid Username or Password']
            render :new 
        end
    end

    def destroy
        logout!
    end


end
