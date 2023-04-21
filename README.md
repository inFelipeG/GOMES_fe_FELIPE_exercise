# Tempo Frontend challenge

# Solution Improvement

### Describe what you have improved in the solution

 **Changelog:** 
- Create an `.editorconfig` file to increase consistence between multiple editors
- Add `@tanstack/react-query` so the application can benefit from caching data
- Type `styled-components` and create a theme
- Rename page components for consistency
- Add a loader to each route to fetch the respective data before rendering the page
- Add an `errorElement` to each route
- Refac `src/api/index.ts`. Moved the content to `src/services.ts` (could've been `src/services/index.ts`, too) and grouped by `teams` and `users`
- Refac the `Card` component so it benefits from composability and is more reusable. Now it includes more pieces, like `CardAvatar`, `CardPrimaryText`, `CardSecondaryText`, and etc.
- Components and styles that have multiple parts now share the same file. Since they aren't used anywhere else, there's no reason not to share the same file. Keeping everything close also means it's easier to maintain. Example: `src/components/Card/index.tsx` 
- Create new components (`Badge`, `Container` - previously `src/components/GlobalComponents.ts`, `Field`, `MainContent`, `UserCard`, `VerticalStack`)
- Remove `List` components
- Rename `Spinner` to `LoadingSpinner` and refac the component
- Move the CSS reset from `src/index.css` to `src/components/GlobalStyle/index.tsx` and add more things
- Create a `src/helpers.tsx` (could've been `src/helpers/...` instead) file. This file exports the `renderWithProviders` utility which is used for tests
- Refac `src/index.tsx` to include providers, `StrictMode`  and CSS reset (`GlobalStyle`)
- Each page exports two components: The content and the wrapper. The content is self-explanatory and receives all needed props from the wrapper, which is handy when testing the page so there's no need to mock the requests. The wrapper fetches data, handles errors, and displays the loading spinner while the data is being fetched.
- Types were refactored
- The application is typed and tested thoroughly
- Every route benefits from cached data (if there's any) and `Suspense`

**What I would change (personal preference)** 
- Would move the application to Next.js or at least Vite
- Would replace Jest with Vitest (25%~ faster and compatible with the current tests)
- Would replace `styled-components` with Tailwind CSS because it's just CSS, easier to work with, self-documenting and there's no JS overhead
- Would remove the loaders and use React Query only. Reason why is the loader is deferred so I can display the loading spinner on the front-end. However, there's no need to do that since the data could be fetched using React Query only and I would be able to provide the same visual feedback to the user. Anyway, I was experimenting with the new React Router 👍 
- Would write the page tests with Cypress instead

## To Run the project you must run:

```
npm install
```

## after the installation finished, you can run:

```
npm start
```

#### The project will open in your browser with the following url http://localhost:3000;

## To run the tests yo must run

```
npm run test
```
