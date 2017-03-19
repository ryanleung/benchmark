class CreateMetrics < ActiveRecord::Migration[5.0]
  def change
    create_table :metrics do |t|
      t.integer :metric_name_id,       null: false
      t.integer :metric_type_id,       null: false
      t.integer :function_id
      t.integer :user_id
      t.integer :company_id,           null: false
      t.integer :business_unit_id
      t.float :value,                  null: false
      t.string :value_description
      t.string :geo
      t.date :relevant_date

      t.timestamps
    end
    add_index :metrics, :metric_name_id
    add_index :metrics, :metric_type_id
    add_index :metrics, :function_id
    add_index :metrics, :user_id
    add_index :metrics, :company_id
  end
end
