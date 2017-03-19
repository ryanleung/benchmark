class CreateIndustries < ActiveRecord::Migration[5.0]
  def change
    create_table :industries do |t|
      t.string :name, null: false
      t.integer :parent_industry_id

      t.timestamps
    end
    add_index :industries, :parent_industry_id
    add_index :industries, :name, unique: true
  end
end
