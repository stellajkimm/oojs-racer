class CreatePlayedGames < ActiveRecord::Migration
  def change
    create_table :played_games do |t|
      t.references :user
      t.references :game
      t.integer :score
      t.references :avatar
      t.boolean :won

      t.timestamps
    end
  end
end
