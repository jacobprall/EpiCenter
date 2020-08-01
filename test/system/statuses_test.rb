require "application_system_test_case"

class StatusesTest < ApplicationSystemTestCase
  setup do
    @status = statuses(:one)
  end

  test "visiting the index" do
    visit statuses_url
    assert_selector "h1", text: "Statuses"
  end

  test "creating a Status" do
    visit statuses_url
    click_on "New Status"

    fill_in "Curr health", with: @status.curr_health
    fill_in "Curr status", with: @status.curr_status
    fill_in "Date", with: @status.date
    fill_in "Date,", with: @status.date,
    fill_in "Integer,", with: @status.integer,
    fill_in "Last test result", with: @status.last_test_result
    fill_in "Last tested", with: @status.last_tested
    fill_in "Next test", with: @status.next_test
    click_on "Create Status"

    assert_text "Status was successfully created"
    click_on "Back"
  end

  test "updating a Status" do
    visit statuses_url
    click_on "Edit", match: :first

    fill_in "Curr health", with: @status.curr_health
    fill_in "Curr status", with: @status.curr_status
    fill_in "Date", with: @status.date
    fill_in "Date,", with: @status.date,
    fill_in "Integer,", with: @status.integer,
    fill_in "Last test result", with: @status.last_test_result
    fill_in "Last tested", with: @status.last_tested
    fill_in "Next test", with: @status.next_test
    click_on "Update Status"

    assert_text "Status was successfully updated"
    click_on "Back"
  end

  test "destroying a Status" do
    visit statuses_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Status was successfully destroyed"
  end
end
