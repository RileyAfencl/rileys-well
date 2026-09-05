# Riley's Well

## Overview
A full stack catalogue app containing custom cocktail recipes that are viewable through clickable recipe cards/modals. 

## Features
- Cocktail data persisted in PostgreSQL
- Rails API for retrieving cocktail data
- Searchable recipe catalogue
- Reusable recipe cards
- Recipe detail modal

## How It Works
Upon page load, the recipe data is pulled from the PostgreSQL database via a Rails backend/REST API and then that data is filtered client side. 

## Things to Improve With More Time
- Add a "What Do I Want?" recommendation view based on cocktail preferences and tags
- Add a "What Can I Make?" view that matches recipes against ingredients a user has available
- Add an interactive glossary for users unfamiliar with cocktail terminology
- Expand the recipe catalogue and add additional visual polish/iconography

## Tech Stack
- Vue 3
- TypeScript
- Ruby on Rails
- PostgreSQL

## How to Run
You need Node.js, Ruby on Rails, and PostgreSQL. Run the following in bash. The API and the Vue app must both be running.

### 1. Install dependencies
From the project root:

```bash
npm install
cd backend
bundle install
```

### 2. Set up the database
Still in `backend/`:

```bash
bin/rails db:create
bin/rails db:migrate
bin/rails db:seed
```

### 3. Start the Rails API
From `backend/`:

```bash
bin/rails server
```

The API is at `http://localhost:3000`. Recipes are at `http://localhost:3000/recipes`.

### 4. Start the Vue app
In a second terminal, from the project root:

```bash
npm run dev
```

Open the Vite URL (usually `http://localhost:5173`). Vue proxies `/recipes` to the Rails server, so leave both processes running.
