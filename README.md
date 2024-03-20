# Job Search Platform Finder

Welcome to the Job Search Platform Finder! This application helps you find various job search platforms and resources to aid in your job hunt. Below are the instructions on how to set up and run the application.
## main floder Setup and Run
   ```bash
   npm install
   ```

## Frontend Setup and Run

1. **Navigate to the Frontend Directory:**

   ```bash
   cd frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Start the Frontend Server:**

   ```bash
   npm start
   ```

4. **Access the Application:**
   Once the server is up and running, you can access the application by navigating to http://localhost:3000 in your web browser.

## Backend Setup and Run

1. **Navigate to the Backend Directory:**

   ```bash
   cd backend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   npm install express
   ```

3. **Seed the Database (Optional):**
   If you want to seed the database with some initial data, run the following command:

   ```bash
   node seeder.js
   ```

4. **Start the Backend Server:**
   Before starting the backend server, make sure you have MongoDB installed and running. Then, start the server using:

   ```bash
   npm start
   ```

5. **Connect to MongoDB:**
   Ensure that MongoDB is running locally on port 27017, or adjust the connection string in your application to match your MongoDB configuration.

## Important Note:

- Make sure both frontend and backend servers are running simultaneously to fully utilize the application features.
- Customize the database name in the MongoDB connection string to match your preference.

That's it! You should now have the Job Search Platform Finder up and running on your local machine. Happy job hunting! 🎉
