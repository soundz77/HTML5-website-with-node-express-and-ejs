# An Express app template using MongoDb, ejs and Socket.io
A modular express app with logging (to file/console) and global error handling. EJS, Socket.io and MongoDB are ready for use. Envalid is used to validate env vars. An example route is set up for a GET request on "/".

# Getting Started

Clone the package with: git clone git://github.com/github.com/soundz77/Express-app-template.git

Install the required dependencies with npm install

Change the name of env.example to .env and add the required env variables.

Use: npm lint for linting, npm run dev for development mode or npm run start for production.

The app starts on http://localhost:3000

Logging and error messages are defined in src/utils/logging/messages/

server.js sets up and configures the server.

app.js configures the middleware and the routes (see src/config and src/config/middleware)

The AppError class takes an error message (define it in src/logging/messages/) and a status code.
