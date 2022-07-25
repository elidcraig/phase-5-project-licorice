class CreateReleaseGenres < ActiveRecord::Migration[7.0]
  def change
    create_table :release_genres do |t|
      t.references :genre, null: false, foreign_key: true
      t.references :release, null: false, foreign_key: true

      t.timestamps
    end
  end
end
