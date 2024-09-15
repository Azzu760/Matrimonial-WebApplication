# Swyamvar.com - A Matrimonial React Web Application

This is a **Matrimonial Web Application** built using **React.js**. It allows users to create profiles, browse through potential matches, send interest, and communicate with other users. The application includes features such as user authentication, profile management, matchmaking, and communication.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **User Authentication**: Sign up, log in, and log out functionality with validation.
- **Profile Management**: Users can create and manage their profiles, including adding photos and personal information.
- **Matchmaking**: Users can browse potential matches based on preferences (age, location, etc.).
- **Expressing Interest**: Users can send interest to other profiles and receive notifications.
- **Search**: Search for profiles based on various filters (age, religion, profession, etc.).
- **Private Messaging**: Users can send and receive private messages with other users they are matched with.
- **Responsive Design**: Fully responsive UI, accessible on mobile and desktop devices.
- **Admin Dashboard**: Admin can manage profiles and oversee the platform's activities.

## Technologies Used

This application is built using the following technologies:

- **React.js** - JavaScript library for building user interfaces.
- **React Router** - For routing between pages.
- **Redux** - For state management.
- **Axios** - For API requests.
- **Node.js** and **Express.js** - Backend for handling authentication and matchmaking logic.
- **MongoDB** - Database for storing user information.
- **Socket.IO** - For real-time messaging.
- **Material-UI** - For UI components and styling.
- **React Hook Form** - For handling forms and validation.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or above)
- [MongoDB](https://www.mongodb.com/) (for the backend database)
- A package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the repository

```bash
git clone https://github.com/yourusername/matrimonial-app.git
cd matrimonial-app
```

### Backend Setup

1. **Navigate to the `server` folder**:
   ```bash
   cd server
   ```

2. **Install the backend dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the `server` folder and add the following details:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Run the backend server**:
   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate to the `client` folder**:
   ```bash
   cd client
   ```

2. **Install the frontend dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the `client` folder and add the following details** (if needed):
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

4. **Run the React app**:
   ```bash
   npm start
   ```

### Running the App

After setting up the backend and frontend, visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## Usage

- **Sign Up**: Create an account by providing necessary details like name, email, and other profile information.
- **Log In**: Access your account by logging in.
- **Profile Setup**: Complete your profile with personal details, photos, and preferences.
- **Browse Profiles**: Start browsing potential matches based on your preferences.
- **Send Interest**: Express interest in a profile, and if mutual, initiate conversations.
- **Messages**: Use the messaging feature to connect with matches.
- **Admin Section**: Admin users can manage the profiles and keep track of user activity.

---

## Dependencies

The following dependencies are used in this project:

### Frontend Dependencies:

- **React.js**: Core library for building UI.
- **react-router-dom**: For client-side routing.
- **axios**: Promise-based HTTP client for making API requests.
- **redux**: State management library.
- **redux-thunk**: Middleware for handling async actions.
- **material-ui**: UI components for faster and easier web development.
- **react-hook-form**: Simplifies form handling and validation.
- **socket.io-client**: For enabling real-time messaging in the chat.

### Backend Dependencies:

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **mongoose**: MongoDB object modeling for Node.js.
- **jsonwebtoken**: For generating and verifying JSON Web Tokens (JWT).
- **bcryptjs**: Library to hash passwords for security.
- **cors**: Middleware for enabling cross-origin resource sharing.
- **dotenv**: To load environment variables from a `.env` file.
- **socket.io**: For real-time, bidirectional communication.

### Dev Dependencies:

- **nodemon**: Monitors for any changes in the source code and automatically restarts the server.

---

- **client**: Frontend application using React.
- **server**: Backend application using Express and MongoDB.

---

## Contributing

Contributions are welcome! If you have any improvements, feel free to fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or feedback. Happy coding!

--- 

