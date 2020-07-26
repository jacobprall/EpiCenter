json.extract! user, :id, :fname, :lname, :email, :pass_digest, :created_at, :updated_at
json.url user_url(user, format: :json)
