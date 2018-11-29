import execute from '.';

const query = {
  users: 'select * from "SendIT-users"',
  login: 'select id, username, password from "SendIT-users" where username = $1 and password = $2',
  register: 'insert into "SendIT-users" (firstname, lastname, password, username, email, usertype) values($1, $2, $3, $4, $5, $6)',
  parcels: 'insert into "SendIT-parcels" (parcelname, status, location, destination, weight, price) values ($1, $2, $3, $4, $5, $6)',
  destination: 'update "SendIT-parcels" set destination = $2 where userid = $1 and parcelid = $3',
  status: 'insert "SendIT-parcels" set status = $1 where userid = $2 and parcelid = $3',
  location: 'update "SendIT-parcels" set location = $2 where userid = $1 and parcelid = $3',
};

export default query;
