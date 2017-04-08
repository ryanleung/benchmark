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

ActiveRecord::Schema.define(version: 20170319002818) do

  create_table "business_units", force: :cascade do |t|
    t.string   "name",          null: false
    t.integer  "company_id",    null: false
    t.date     "founding_date"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["company_id"], name: "index_business_units_on_company_id"
    t.index ["name"], name: "index_business_units_on_name"
  end

  create_table "companies", force: :cascade do |t|
    t.string   "name",         null: false
    t.integer  "industry_id"
    t.string   "url"
    t.string   "city"
    t.string   "state"
    t.string   "logo_img_url"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["industry_id"], name: "index_companies_on_industry_id"
    t.index ["name"], name: "index_companies_on_name", unique: true
  end

  create_table "functions", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_functions_on_name", unique: true
  end

  create_table "industries", force: :cascade do |t|
    t.string   "name",               null: false
    t.integer  "parent_industry_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["name"], name: "index_industries_on_name", unique: true
    t.index ["parent_industry_id"], name: "index_industries_on_parent_industry_id"
  end

  create_table "metric_names", force: :cascade do |t|
    t.string   "name",           null: false
    t.integer  "metric_type_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["metric_type_id"], name: "index_metric_names_on_metric_type_id"
    t.index ["name"], name: "index_metric_names_on_name", unique: true
  end

  create_table "metric_types", force: :cascade do |t|
    t.string   "name",                  null: false
    t.integer  "parent_metric_type_id"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.index ["name"], name: "index_metric_types_on_name", unique: true
    t.index ["parent_metric_type_id"], name: "index_metric_types_on_parent_metric_type_id"
  end

  create_table "metrics", force: :cascade do |t|
    t.integer  "metric_name_id",    null: false
    t.integer  "metric_type_id",    null: false
    t.integer  "function_id"
    t.integer  "user_id"
    t.integer  "company_id",        null: false
    t.integer  "industry_id",       null: false
    t.integer  "business_unit_id"
    t.float    "value",             null: false
    t.string   "value_description"
    t.string   "geo"
    t.date     "relevant_date"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.index ["company_id"], name: "index_metrics_on_company_id"
    t.index ["function_id"], name: "index_metrics_on_function_id"
    t.index ["industry_id"], name: "index_metrics_on_industry_id"
    t.index ["metric_name_id"], name: "index_metrics_on_metric_name_id"
    t.index ["metric_type_id"], name: "index_metrics_on_metric_type_id"
    t.index ["user_id"], name: "index_metrics_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name",                                null: false
    t.string   "email",                               null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
