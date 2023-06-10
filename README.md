# Youtubesubscribers


To run the code mentioned above, follow these steps:

Install Node.js: Make sure you have Node.js installed on your machine.

Install Dependencies: Open a terminal or command prompt in the project directory and run the following command to install the required dependencies:

shell
Copy code
npm install
Start MongoDB: Make sure MongoDB is running on your local machine or update the DATABASE_URL in createDatabase.js file to connect to your MongoDB server.

Create Database: Run the following command to create the database and populate it with initial data:

shell
Copy code
node createDatabase.js
This script connects to the MongoDB server using the DATABASE_URL, creates a connection, and inserts the data from data.js file into the subscribers collection. It also prints the retrieved data from the collection.

Start the Server: Run the following command to start the server:

shell
Copy code
node index.js
The server will start listening on port 5000, and you should see the message "App listening on port 5000!" in the console.

Test the Endpoints: You can use tools like Postman or cURL to test the API endpoints. Here are a few examples:

GET /subscribers: Retrieves all subscribers from the database.
GET /subscribers/names: Retrieves predefined data from the data.js file.
GET /subscribers/name/:name: Retrieves subscribers with a specific name.
GET /subscribers/:id: Retrieves a subscriber by their ID.
Make sure to replace :name and :id in the endpoint URLs with the actual values you want to search for.

Feel free to modify the code according to your needs and add error handling, validation, and additional routes as required.
