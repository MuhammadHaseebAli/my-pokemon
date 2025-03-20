# PokeReact App

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
- **Linting:** Implemented ESLint to ensure we write high-quality and standardized code.

## Wishlist  
Although I have implemented everything as per the task document, I would like to highlight a few areas I would improve if given more time:  

- **UI/UX Enhancements:** Improve typography, responsiveness, and overall user experience.  
- **Pagination:** Implement proper pagination to allow users to jump to a specific page instead of navigating sequentially.  
  - Example: If there are 100 pages and the user wants to go to page 50, they shouldn't have to click "Next" 50 times.  
- **Linting Integration:** Enforce linting checks in Git commits to prevent low-quality code from being committed.  
- **Accessibility Improvements::** Ensure the app meets WCAG guidelines for better usability, including keyboard navigation and screen reader support.
- **Infinite Scrolling::**  Instead of traditional pagination, implement infinite scrolling for a seamless browsing experience.
- **Offline Support::**  Cache data to allow users to browse previously fetched Pokémon even when offline.
