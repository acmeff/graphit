require 'test_helper'

class Api::GraphsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_graphs_create_url
    assert_response :success
  end

  test "should get show" do
    get api_graphs_show_url
    assert_response :success
  end

  test "should get index" do
    get api_graphs_index_url
    assert_response :success
  end

  test "should get delete" do
    get api_graphs_delete_url
    assert_response :success
  end

end
