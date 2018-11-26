[![Build Status](https://travis-ci.org/yeex/SendIT.svg?branch=APIs)](https://travis-ci.org/yeex/SendIT)
[![Coverage Status](https://coveralls.io/repos/github/yeex/SendIT/badge.svg)](https://coveralls.io/github/yeex/SendIT)
[![Maintainability](https://api.codeclimate.com/v1/badges/973fffd123f8ab784461/maintainability)](https://codeclimate.com/github/yeex/SendIT/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/973fffd123f8ab784461/test_coverage)](https://codeclimate.com/github/yeex/SendIT/test_coverage)
###  📮SendIT | UI
### SendIT is a courier service that helps users deliver parcels to different destinations.  

## Stack
- HTML & CSS
- Javascript

## Technologies Used
* [Node.js](https://nodejs.org) - A runtime environment based off of Chrome's V8 Engine for writing Javascript code on the server.
* [Express.js](https://expressjs.com) - Web framework based on Node.js.
* [Babel](https://babeljs.io) - Javascript transpiler.
* [Eslint](https://eslint.org/) - Javascript linter. 
* [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 
	style [guide](https://github.com/airbnb/javascript) was followed.

## Testing tools
* [Mocha](https://mochajs.org/) - A Javascript test framework.
* [Chai](http://chaijs.com) - Assertion library.

##  Required Features:
- Users can create an account and log in.
- Users can create a parcel delivery order.
- Users can change the destination of a parcel delivery order.
- Users can cancel a parcel delivery order.
- Users can see the details of a delivery order.
- Admin can change the status and present location of a parcel delivery order.

### Installation
* Install [NodeJs](https://nodejs.org/en/download/) .
* Clone this repository using `git clone https://github.com/yeex/SendIT.git`.
* Run `npm install` to install all dependencies.
* Run `npm start` to start the server.
* Navigate to [`localhost:5000/api/v1`](localhost:3000/api/v1) in your browser to access the application.

## Tests

* The tests were written using Mocha and Mocha-http
* To run tests, navigate to the project's root directory
* After installation, run the following command
    - `npm run test`
     
### Endpoints
| EndPoint                      | Functionality                                         |
|:------------------------------|:------------------------------------------------------|
| GET /parcels                  |    Fetch all parcel delivery orders                   |
| GET /parcels/parcelId         |    Fetch a specific parcel delivery order             | 
| GET /users/userId/parcels     |    Fetch all parcel delivery orders by a specific user| 
| PUT /parcels/parcelId/cancel  |    Cancel the specific parcel delivery order          | 
| POST /parcels                 |    Create a parcel delivery order                     | 

## Author
* Ntwari Moise