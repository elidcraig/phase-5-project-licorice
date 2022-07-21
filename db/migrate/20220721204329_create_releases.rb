class CreateReleases < ActiveRecord::Migration[7.0]
  def change
    create_table :releases do |t|
      t.references :artist, null: false, foreign_key: true
      t.string :title
      t.string :release_date
      t.string :artwork_url
      t.string :type

      t.timestamps
    end
  end
end
