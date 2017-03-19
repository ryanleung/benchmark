class CreateMetricTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :metric_types do |t|
      t.string :name
      t.integer :parent_metric_type_id

      t.timestamps
    end
    add_index :metric_types, :name, unique: true
    add_index :metric_types, :parent_metric_type_id
  end
end
