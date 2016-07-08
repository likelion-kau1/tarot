class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      
      t.string  :name
      t.integer :year
      t.integer :month
      t.integer :date 
      
      t.timestamps null: false
    end
  end
end
