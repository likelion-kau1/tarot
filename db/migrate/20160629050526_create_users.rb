class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|

      t.string :name
      t.string :year
      t.string :month
      t.string :date  
      t.timestamps null: false
    end
  end
end
