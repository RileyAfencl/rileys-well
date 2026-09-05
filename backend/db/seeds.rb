recipes_path = Rails.root.join("..", "cocktaildata.json")
recipes = JSON.parse(File.read(recipes_path))

recipes.each do |recipe|
  record = Recipe.find_or_initialize_by(name: recipe.fetch("name"))
  record.assign_attributes(
    spirit: recipe.fetch("spirit"),
    glass: recipe.fetch("glass"),
    tags: recipe.fetch("tags"),
    garnish: recipe.fetch("garnish"),
    ingredients: recipe.fetch("ingredients"),
    instructions: recipe.fetch("instructions"),
  )
  record.save!
end
