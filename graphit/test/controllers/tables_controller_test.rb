require 'test_helper'

class TablesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get tables_create_url
    assert_response :success
  end

  test "should get destroy" do
    get tables_destroy_url
    assert_response :success
  end

  test "should get show" do
    get tables_show_url
    assert_response :success
  end

  test "should get index" do
    get tables_index_url
    assert_response :success
  end

end
