# iPokemon List App

## Introduction

This project is a React application that retrieves a list of Pokemon from the PokeAPI and persistently stores the list. Upon clicking an item in the list, the program displays the details of the corresponding Pokemon. The application is built using TypeScript, Redux Toolkit, and RTK Query.

## Setup & Running the Application

1. Clone the repository:

   ```sh
   git clone <repo-url>
   cd my-pokemon
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure environment variables:

   - Create a `.env.development` and `.env.production` file in the root directory.
   - .env.development is used in dev mode and .env.production is used in production mode (after build)
   - Copy contents from `.env.example` and update values as needed.
   - Example:
     ```sh
     VITE_API_BASE_URL=https://pokeapi.co/api/v2/
     ```

4. Start the application:

   ```sh
   npm run dev
   ```

   - If `VITE_API_BASE_URL` is set in `package.json`, it will override the `.env` file value.

5. Run unit tests:

   ```sh
   npm run test
   ```

## Environment Variable Handling

The application retrieves API URLs from `.env` files based on the environment:

- **Development Mode:** Uses `.env.development`
- **Production Mode:** Uses `.env.production`
- **Override Mechanism:** If `VITE_API_BASE_URL` is specified in `package.json`, it takes precedence over the `.env` files.

## Cross-Platform Compatibility

To ensure compatibility on both Windows and Mac, the `package.json` is set up to correctly load environment variables across different operating systems.

## Recommended Version
node v20.17.0 
npm v10.8.2

## Extra Features

- **Pagination:** Implemented pagination to ensure scalability even with a large number of Pokemon.
- **Linting:** Added linting rules to enforce code quality.
- **Optimized Image Loading:** Uses the following image URL pattern to avoid unnecessary API calls:
  ```
  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png
  ```
- **Environment Variables:** `.env` file support is implemented to store sensitive data securely, preventing credentials from being committed to the repository.
