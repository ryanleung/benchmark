class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :name,         null: false
      t.integer :industry_id
      t.date :founding_date

      t.timestamps
    end
    add_index :companies, :industry_id
    add_index :companies, :name, unique: true
    add_index :companies, :founding_date
  end
end
