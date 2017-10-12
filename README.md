# Node API 
An example api for parks using node, express and mongo

Requirements:
-------------

Make sure the following things are properly installed on your computer.

- [nodejs](https://nodejs.org/en/>)
- [npm](https://docs.npmjs.com/>)
- [mongodb](https://www.mongodb.com/>)

Getting Started
---------------

Clone the repo:

    $ git clone https://github.com/SylvesterMabasa/parks.git
    $ cd parks

Install all the dependencies:

    $ npm install

Create .env file:

    $ touch .env

Add the following inside .env file

`DB_URL=mongodb://localhost/parks`

Start server:


Run the following command to start the MongoDB:

    $ sudo mongod
 
Run the following command to start the server:

    $ npm start



Run tests:

Run the following command to test the api.

    $ npm test

