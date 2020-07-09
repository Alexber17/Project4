class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist_name
      t.string :url

      t.timestamps
    end
  end
end
