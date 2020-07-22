class ConnectionsController < ApplicationController

    def create
        @connection = Connection.new(connect_params)
        @connection.user_id = params[:user_id]
        if @connection.save!
            redirect_to user_url(connect_params[:connected_id]), notice: "Connection Requested"
        else 
            flash[:errors] = @connection.errors.full_messages
            redirect_to user_url(connect_params[:connected_id])
        end
    end

    def update
        @connection = Connection.find_by(id: params[:id])
        if @connection.update(connect_params)
            redirect_to user_url(params[:user_id]), notice: "Connection Updated"
            #pass current user id
        else
            flash[:errors] = @connection.errors.full_messages 
            redirect_to user_url(params[:user_id])
        end
        
    end



    def show
        #see all users connections
        render :show
    end

    def destroy
        @connection = Connection.find_by(id: params[:id])
        @connection.delete
        redirect_to user_url(params[:user_id])
    end

    def connect_params
        params.require(:connect).permit(:user_id, :connected_id, :status, :relationship)
    end

end
