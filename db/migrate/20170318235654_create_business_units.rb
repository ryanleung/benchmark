class CreateBusinessUnits < ActiveRecord::Migration[5.0]
  def change
    create_table :business_units do |t|
      t.string :name
      t.integer :company_id
      t.date :founding_date

      t.timestamps
    end
    add_index :business_units, :name
    add_index :business_units, :company_id
  end
end
