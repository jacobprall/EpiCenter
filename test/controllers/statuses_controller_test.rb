require 'test_helper'

class StatusesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @status = statuses(:one)
  end

  test "should get index" do
    get statuses_url
    assert_response :success
  end

  test "should get new" do
    get new_status_url
    assert_response :success
  end

  test "should create status" do
    assert_difference('Status.count') do
      post statuses_url, params: { status: { curr_health: @status.curr_health, curr_status: @status.curr_status, date: @status.date, date,: @status.date,, integer,: @status.integer,, last_test_result: @status.last_test_result, last_tested: @status.last_tested, next_test: @status.next_test } }
    end

    assert_redirected_to status_url(Status.last)
  end

  test "should show status" do
    get status_url(@status)
    assert_response :success
  end

  test "should get edit" do
    get edit_status_url(@status)
    assert_response :success
  end

  test "should update status" do
    patch status_url(@status), params: { status: { curr_health: @status.curr_health, curr_status: @status.curr_status, date: @status.date, date,: @status.date,, integer,: @status.integer,, last_test_result: @status.last_test_result, last_tested: @status.last_tested, next_test: @status.next_test } }
    assert_redirected_to status_url(@status)
  end

  test "should destroy status" do
    assert_difference('Status.count', -1) do
      delete status_url(@status)
    end

    assert_redirected_to statuses_url
  end
end
