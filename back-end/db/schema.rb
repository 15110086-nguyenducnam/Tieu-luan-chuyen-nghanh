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

ActiveRecord::Schema.define(version: 2018_10_20_064150) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "banggias", force: :cascade do |t|
    t.bigint "sanpham_id"
    t.string "thoidiem"
    t.string "string"
    t.decimal "gia"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sanpham_id"], name: "index_banggias_on_sanpham_id"
  end

  create_table "chitiethdccs", force: :cascade do |t|
    t.integer "soluong"
    t.decimal "dongia"
    t.bigint "hopdongcc_id"
    t.bigint "sanpham_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hopdongcc_id"], name: "index_chitiethdccs_on_hopdongcc_id"
    t.index ["sanpham_id"], name: "index_chitiethdccs_on_sanpham_id"
  end

  create_table "chitiethdmuahangs", force: :cascade do |t|
    t.integer "sonluong"
    t.decimal "dongia"
    t.bigint "hopdongmuahang_id"
    t.bigint "chitiethdcc_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chitiethdcc_id"], name: "index_chitiethdmuahangs_on_chitiethdcc_id"
    t.index ["hopdongmuahang_id"], name: "index_chitiethdmuahangs_on_hopdongmuahang_id"
  end

  create_table "hopdongccs", force: :cascade do |t|
    t.boolean "trangthaidh"
    t.bigint "nhacc_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["nhacc_id"], name: "index_hopdongccs_on_nhacc_id"
  end

  create_table "hopdongmuahangs", force: :cascade do |t|
    t.integer "trangthaihd"
    t.bigint "khachang_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["khachang_id"], name: "index_hopdongmuahangs_on_khachang_id"
  end

  create_table "khachangs", force: :cascade do |t|
    t.string "ho"
    t.string "ten"
    t.bigint "loaikh_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["loaikh_id"], name: "index_khachangs_on_loaikh_id"
  end

  create_table "loaikhs", force: :cascade do |t|
    t.string "tenloaikh"
    t.float "chietkhau"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "loaisps", force: :cascade do |t|
    t.string "ten"
    t.string "sp"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "nhaccs", force: :cascade do |t|
    t.string "ten"
    t.string "diachi"
    t.integer "sdt"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sanphams", force: :cascade do |t|
    t.string "tensanpham"
    t.bigint "loaisp_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["loaisp_id"], name: "index_sanphams_on_loaisp_id"
  end

  add_foreign_key "banggias", "sanphams"
  add_foreign_key "chitiethdccs", "hopdongccs"
  add_foreign_key "chitiethdccs", "sanphams"
  add_foreign_key "chitiethdmuahangs", "chitiethdccs"
  add_foreign_key "hopdongccs", "nhaccs"
  add_foreign_key "hopdongmuahangs", "khachangs"
  add_foreign_key "khachangs", "loaikhs"
  add_foreign_key "sanphams", "loaisps"
end
