# Github Search API
This project is a simple web application that demonstrates the use of the Github Search API. It allows users to search for repositories by keyword and sort the results by different parameters. The application is built using Vite.js, a lightweight development server and build tool.

## Features
- Search for repositories by keyword
- Sort the results by different parameters such as best-match, stars, forks, updated
- Pagination functionalities
- Shows the count of total repositories returned.
- Throttled API fetch
  - Due to a restriction in the Github Search API, this application applies a [30 requests per minute](src/useApi.ts) throttling
- Caching of API results to avoiding reloading results of the same API endpoint/search queries


## Getting Started
To get started with this project, you will need to have Node.js and Vite.js installed on your machine. You can download Node.js from the official website (https://nodejs.org/) and Vite.js by running the following command:

```bash
npm install -g vite
```

Once you have Node.js and Vite.js installed, clone the repository and install the dependencies by running the following commands:

```bash
git clone https://github.com/<username>/github-search-api.git
cd github-search-api
npm install
```

## Running the Application
To run the application, you can use the following command:

```bash
vite
```

This will start the development server and you can access the application in your browser at http://localhost:3000.

## Usage
You can search for repositories by keyword by typing in the search bar and press enter. You can also sort the results by different parameters such as best-match, stars, forks, updated by selecting the option from the dropdown.

The application also shows the total number of repositories returned by the search query. The pagination feature allows you to navigate through the pages.

## Conclusion
This project demonstrates the use of the Github Search API and provides a simple interface for searching for repositories. It's a great starting point for anyone interested in working with the Github Search API.

You can add more features such as filtering based on the number of forks or stars. The application can also be extended to show more details about the repository such as the number of contributors, open issues, etc.

Happy Coding!



