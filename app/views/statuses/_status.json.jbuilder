json.extract! status, :id, :last_tested, :date,, :last_test_result, :integer,, :curr_status, :integer,, :curr_health, :integer,, :next_test, :date, :created_at, :updated_at
json.url status_url(status, format: :json)
