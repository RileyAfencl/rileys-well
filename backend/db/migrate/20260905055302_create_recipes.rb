class CreateRecipes < ActiveRecord::Migration[8.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :spirit
      t.string :glass
      t.jsonb :tags
      t.jsonb :garnish
      t.jsonb :ingredients
      t.jsonb :instructions

      t.timestamps
    end
  end
end
