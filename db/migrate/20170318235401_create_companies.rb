class CreateCompanies < ActiveRecord::Migration[5.0]
  def change
    create_table :companies do |t|
      t.string :name,         null: false
      t.integer :industry_id
      t.string :url
      t.string :city
      t.string :state
      t.string :logo_img_url # TODO: move this to its own model once we start needing more images

      t.timestamps
    end
    add_index :companies, :industry_id
    add_index :companies, :name, unique: true
  end
end
