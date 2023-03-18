**Node.js/MongoDB API**

This is a sample Node.js/MongoDB API project that demonstrates basic CRUD operations on two collections - students and homework. The API has been built using Node.js and the Express.js framework. The database used is MongoDB.

**PREREQISITES**

Before running the API, you need to have the following installed on your machine:

-Node.js

-MongoDB

**SETUP**

To set up the project on your local machine, follow these steps:

1. Clone the repository to your local machine.

		git clone https://github.com/cemdeniz/NodeJS_API.git

2. Navigate to the project directory.

		cd sample-nodejs-mongodb-api

3. Install the dependencies.

		npm install


4. Start the MongoDB server.

		mongod or mongo

5. Start the Node.js server.

		node server.js

The API will now be available at http://localhost:3000/.

Note: MongoDB server connected to 'mongodb://127.0.0.1/mydatabase' in the server.js for my computer, if that doesn't work for you you can set it up to 'mongodb://localhost:27017/mydatabase'

**USAGE**

You can test the API using any API testing tool like Postman or the Rest Client extension in VSCode. The project comes with a rest.http file which contains sample requests that you can use to test the API.

Here's a brief overview of the API endpoints:

**Students**

	GET /students - Get all students.
	GET /students/{studentId} - Get a student by ID.
	POST /students - Add a new student.
	PUT /students/{studentId} - Update an existing student by ID.
	DELETE /students/{studentId} - Delete a student by ID.

**Homework**
	
	GET /homework - Get all homework.
	GET /homework/{homeworkId} - Get homework by ID.
	POST /homework - Add a new homework.
	PUT /homework/{homeworkId} - Update an existing homework by ID.
	DELETE /homework/{homeworkId} - Delete homework by ID.
