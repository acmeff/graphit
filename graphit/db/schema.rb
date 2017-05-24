# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170524034602) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "graphs", force: :cascade do |t|
    t.string   "title",      null: false
    t.json     "x_data",     null: false
    t.json     "y_data",     null: false
    t.integer  "owner_id",   null: false
    t.integer  "table_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "format",     null: false
    t.index ["owner_id"], name: "index_graphs_on_owner_id", using: :btree
    t.index ["table_id"], name: "index_graphs_on_table_id", using: :btree
    t.index ["title"], name: "index_graphs_on_title", using: :btree
  end

  create_table "shares", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "graph_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "sharer_id",  null: false
    t.index ["graph_id"], name: "index_shares_on_graph_id", using: :btree
    t.index ["user_id"], name: "index_shares_on_user_id", using: :btree
  end

  create_table "tables", force: :cascade do |t|
    t.integer  "owner_id",   null: false
    t.string   "title",      null: false
    t.json     "content",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "format",     null: false
    t.index ["owner_id"], name: "index_tables_on_owner_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
