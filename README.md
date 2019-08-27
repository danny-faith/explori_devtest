#Fruitful Surveys - Daniel Blythe

## Notes

- Please use master branch
- This project assumes you have a copy of the supplied dev_test database installed with MySQL running
- This project assumes you have Node
- \*Please add a .env file to the root directory of the project and fill in the following with the relevant database credentials
  DBHOST=""
  DBUSER=""
  DBPASSWORD=""
  DB=""
- concurrently package is being used in this project to run server and client in dev mode at same time.
- React was buult with create-react-app using the TypeScript(TS) flag to install a TS version
- @types/\* should all be moved into DevDependencies in client package.json

## Stack

- MySQL
- Express
- React (TypeScript)
- Node

## Packages

### Backend

- dotenv
- express
- load-json-file
- mysql
- nodemon

### Frontend

- bootstrap
- highcharts
- highcharts-react-official
- react
- react-bootstrap
- react-dom
- react-router-dom
- react-scripts
- typescript
- autoprefixer
- postcss-cli
- tailwindcss

### How to install project

$ git clone https://github.com/danny-faith/explori_devtest.git <PROJECT_NAME>
$ cd <PROJECT_NAME>
$ npm i
$ cd client
\$ npm i

### How to run project

- Please see notes on .env for database connection

$ cd <PROJECT_NAME> 
$ npm run dev

# Explori Developer Candidate Test

Congratulations on getting to the Developer test. That you are receiving this means that we are considering you as a serious contender! :smiley:

## You have been provided with:

1. Documentation (found in docs folder):

   a. A database schema diagram

   b. Question type information

   c. Wireframes

   d. Additional information

## Prerequisites:

You will need installed on your machine:

1. MySQL server (preferably version 5+)

2. The supplied database (excecute the supplied SQL script)

3. Whatever languages / frameworks / libraries you need to complete the task

## The task:

Fruitful Surveys are rolling out a new backend admin app where their clients can view reports and build surveys etc.

You have been supplied with some data that includes:

1. a Survey MySQL table which contains references to multiple surveys

2. JSON files containing the data for one Survey object and multiple Question objects (that belong to that survey)

3. some survey response data as MySQL tables

Using the supplied data please provide:

1. a simple backend microservice api to access and transform the data in the database (this could be implemented using node.js, SpringBoot or Akka Http). You could use RESTful endpoints or whatever protocol that you think fits

2. a simple frontend client app (could be implemented as a simple ReactJs app) that displays 2 views:

   i. A list of the surveys in the database that displays the survey’s title with a link to the report page view. The list could be paginated - feel free to use a list widget / library

   ii. A report page that displays the result of at least one question (or question type) in the survey in a table (but feel free to supply more if you can). If the question has question sets and question options, display each question option’s raw count and the percentage count (see Wireframe example). If you get time you could add a chart to each question too using your library of choice (perhaps using Highcharts.js or D3). For any question types that you don’t have time to implement, just display the question title and short text (content.shortTitle content.longTitle). Feel free to add any design elements that make it look good and provides a decent user experience. Add in any necessary routes / links so that it is navigable from the home page.

This task will involve setting up some basic API calls to the server app that queries the database and returns the data in a format that allows the frontend to consume and display the data as required. You will find in the documentation some sample database info / schemas that will guide you.

Note: The data contains references to objects in multiple locales. For the scope of this test, you can just use the “en_GB” locale data.

Two question types (RD and CH) allow the respondent to add “Other specify” verbatim text when they select an option that has this feature enabled in the survey. For extra points, see if you can work out how this works and display the verbatim text in the report!

For extra brownie points:

1. make the backend microservice deployable as a Docker container.

2. use a functional programming style

3. build the apps in such a way that they might be scalable

4. make the code clean and readable

If you have any questions please contact Tom (t.bishop@explori.com). Have fun :wink:
