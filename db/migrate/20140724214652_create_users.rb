class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, :email, :password_digest

      t.timestamps
    end
    add_index :users, :name, unique: true
  end
  end
end
