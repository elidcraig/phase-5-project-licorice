# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_27_203159) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artist_genres", force: :cascade do |t|
    t.bigint "genre_id", null: false
    t.bigint "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_artist_genres_on_artist_id"
    t.index ["genre_id"], name: "index_artist_genres_on_genre_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorite_artists", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "artist_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_favorite_artists_on_artist_id"
    t.index ["user_id"], name: "index_favorite_artists_on_user_id"
  end

  create_table "favorite_releases", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "release_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["release_id"], name: "index_favorite_releases_on_release_id"
    t.index ["user_id"], name: "index_favorite_releases_on_user_id"
  end

  create_table "genres", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "release_genres", force: :cascade do |t|
    t.bigint "genre_id", null: false
    t.bigint "release_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["genre_id"], name: "index_release_genres_on_genre_id"
    t.index ["release_id"], name: "index_release_genres_on_release_id"
  end

  create_table "release_reviews", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "release_id", null: false
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["release_id"], name: "index_release_reviews_on_release_id"
    t.index ["user_id"], name: "index_release_reviews_on_user_id"
  end

  create_table "release_saves", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "release_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["release_id"], name: "index_release_saves_on_release_id"
    t.index ["user_id"], name: "index_release_saves_on_user_id"
  end

  create_table "releases", force: :cascade do |t|
    t.bigint "artist_id", null: false
    t.string "title"
    t.string "release_date"
    t.string "artwork_url"
    t.string "release_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_releases_on_artist_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "avatar_url"
    t.string "location"
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "artist_genres", "artists"
  add_foreign_key "artist_genres", "genres"
  add_foreign_key "favorite_artists", "artists"
  add_foreign_key "favorite_artists", "users"
  add_foreign_key "favorite_releases", "releases"
  add_foreign_key "favorite_releases", "users"
  add_foreign_key "release_genres", "genres"
  add_foreign_key "release_genres", "releases"
  add_foreign_key "release_reviews", "releases"
  add_foreign_key "release_reviews", "users"
  add_foreign_key "release_saves", "releases"
  add_foreign_key "release_saves", "users"
  add_foreign_key "releases", "artists"
end
