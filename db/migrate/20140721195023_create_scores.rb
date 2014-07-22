class CreateScores < ActiveRecord::Migration
  def change
    create_table :scores do |t|
      t.references :player
      t.references :game
      t.integer :score

      t.timestamps
    end
  end
end
