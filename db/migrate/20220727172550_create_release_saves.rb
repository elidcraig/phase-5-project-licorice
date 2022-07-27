class CreateReleaseSaves < ActiveRecord::Migration[7.0]
  def change
    create_table :release_saves do |t|
      t.references :user, null: false, foreign_key: true
      t.references :release, null: false, foreign_key: true

      t.timestamps
    end
  end
end
