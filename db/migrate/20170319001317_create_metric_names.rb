class CreateMetricNames < ActiveRecord::Migration[5.0]
  def change
    create_table :metric_names do |t|
      t.string :name,              null: false
      t.integer :metric_type_id

      t.timestamps
    end
    add_index :metric_names, :name, unique: true
    add_index :metric_names, :metric_type_id
  end
end
