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
	style [guide](https://github.com/airbnb/javascript).

## Testing tools
* [Mocha](https://mochajs.org/) - A Javascript test framework.
* [Chai](http://chaijs.com) - Assertion library.

## Heroku hosted SendIT
[Heroku](https://andelasendit.herokuapp.com) 

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
* Run `npm run build` to transpile ES6 to modern browser compatible language.
* Run `npm run server` to start the server.
* Navigate to [`localhost:3000/api/v1`](localhost:3000/api/v1) in your browser to access the application.

## Tests

* The tests were written using Mocha and Mocha-http
* To run tests, navigate to the project's root directory
* After installation, run the following command
    - `npm run dev-test`
     
### Endpoints
|  Methods	| EndPoint                         |        Action                                          |
|:----------|:---------------------------------|:-------------------------------------------------------|
|   GET	    | /parcels                  	   | Fetch all parcel delivery orders                       |
|   GET		| /parcels/parcelId         	   | Fetch a specific parcel delivery order                 | 
|   GET		| /users/userId/parcels     	   | Fetch all parcel delivery orders by a specific user    | 
|	PUT		| /parcels/parcelId/cancel  	   | Cancel the specific parcel delivery order              | 
|   POST	| /parcels                         | Create a parcel delivery order                         | 
|	POST    | /auth/signup                     | Register a user                                        |
|   POST    | /auth/login                      | Login a user                                           |
|	PUT     | /parcels/parcelId/destination    | Change the location of a specific parcel delivery order|
|	PUT     | /parcels/parcelId/status         | Change the status of a specific parcel delivery order  |
|	PUT     | /parcels/parcelId/presentLocation| Change the present  location of a specific             | |           |                                  | parcel delivery order                                  |


## Author
* Ntwari Moise
