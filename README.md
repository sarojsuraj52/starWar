# Star Wars People Search

Star Wars People Search is a web application that allows users to search for characters from the Star Wars universe using the Star Wars API (SWAPI). Users can search for characters by name, view details about each character, and sort the search results.

## Features

- **Search**: Users can search for Star Wars characters by name.
- **Sorting**: Search results can be sorted in ascending or descending order by name.
- **Pagination**: Search results are paginated for easy navigation.
- **Character Details**: Users can view details about each character, including height, mass, hair color, skin color, eye color, birth year, and gender.
- **Loading State**: The application displays a loading indicator while fetching data from the SWAPI.
- **Error Handling**: Users are informed if there is an error connecting to the SWAPI.

## Technologies Used

- React.js: Frontend JavaScript library for building user interfaces.
- Material-UI: React component library for building UIs with Material Design.
- Redux Toolkit: State management library for managing application state.
- Axios: Promise-based HTTP client for making API requests.
- SWAPI (Star Wars API): External API providing data about Star Wars characters.

## Installation

To run the Star Wars People Search application locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/sarojsuraj52/starWar.git
   ```

2. Navigate to the project directory:

   ```
   cd starWar
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

## Usage

- Enter a character name in the search bar and press Enter to search for characters.
- Click on the sorting icon to sort the search results alphabetically.
- Navigate through the pages using the pagination controls.
- View details about each character by clicking on their name.


## Acknowledgments

- The Star Wars API (SWAPI) for providing the data used in this application.
- Material-UI for the beautiful UI components.

---
