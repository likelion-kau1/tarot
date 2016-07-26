class CreatePicks < ActiveRecord::Migration
  def change
    create_table :picks do |t|

      t.string :card_id
      t.timestamps null: false
    end
  end
end
