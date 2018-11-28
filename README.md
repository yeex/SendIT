[![Build Status](https://travis-ci.org/yeex/SendIT.svg?branch=APIs)](https://travis-ci.org/yeex/SendIT)[![Coverage Status](https://coveralls.io/repos/github/yeex/SendIT/badge.svg?branch=APIs)](https://coveralls.io/github/yeex/SendIT?branch=APIs)  
[![Maintainability](https://api.codeclimate.com/v1/badges/973fffd123f8ab784461/maintainability)](https://codeclimate.com/github/yeex/SendIT/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/973fffd123f8ab784461/test_coverage)](https://codeclimate.com/github/yeex/SendIT/test_coverage)
###  📮SendIT | UI
### SendIT is a courier service that helps users deliver parcels to different destinations.  

## Stack
- HTML & CSS
- Javascript

## Frameworks
- NodeJS
- ExpressJS

##  Required Features:
- Users can create an account and log in.
- Users can create a parcel delivery order.
- Users can change the destination of a parcel delivery order.
- Users can cancel a parcel delivery order.
- Users can see the details of a delivery order.
- Admin can change the status and present location of a parcel delivery order.

##  Installation
After fetching the repository directory using CMD(Command Prompt), access the express-demo file with CMD and type node index.js to start the server...Once the server has startes, go ahead and test the APIs with Postman.

      
### Endpoints
| EndPoint                      | Functionality                                         |
|:------------------------------|:------------------------------------------------------|
| GET /parcels                  |    Fetch all parcel delivery orders                   |
| GET /parcels/parcelId         |    Fetch a specific parcel delivery order             | 
| GET /users/userId/parcels     |    Fetch all parcel delivery orders by a specific user| 
| PUT /parcels/parcelId/cancel  |    Cancel the specific parcel delivery order          | 
| POST /parcels                 |    Create a parcel delivery order                     | 
