# Portfolio Website Backend

Welcome to the backend code for my portfolio website. This part of the project handles various functionalities, such as managing comments, fetching news data, and enabling cross-origin resource sharing (CORS) for the frontend.

## Technologies Used

- Node.js: The server-side runtime environment.
- Express: A minimal web application framework for Node.js.
- MongoDB: A NoSQL database for storing comments.
- axios: A promise-based HTTP client for making requests to external APIs.
- CORS: A middleware for handling Cross-Origin Resource Sharing.
- dotenv: A library for loading environment variables from a .env file.

## Functionality

### Comment Handling

The backend handles user comments for the Guest Book card. It provides the following endpoints:

- `GET /`: Retrieves all saved comments from the database.

- `POST /`: Saves a new comment to the database.

- `POST /delete`: Deletes a comment based on the provided password and text.

### News Data

The backend fetches top headlines from the News API based on the selected language. It provides the following endpoint:

- `GET /news/:lang`: Retrieves top headlines for a specific language.

### CORS Configuration

The backend handles Cross-Origin Resource Sharing (CORS) to allow requests from specific origins. This is essential for interacting with the frontend from different domains.

## Getting Started

To run the backend locally, follow these steps:

1. Clone this repository.

2. Navigate to the backend directory using your command line.

3. Install the required dependencies by running `npm install`.

4. Set up your environment variables by creating a `.env` file and adding your MongoDB URL and News API key.

5. Start the backend server by running `npm start`.

The backend server will be running on the specified port, allowing the frontend to communicate with it.

Thank you for exploring the backend code of my portfolio website. If you have any questions or suggestions, feel free to reach out.
