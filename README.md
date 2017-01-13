# url-shortener

This tool is able to create shortened urls that are easier to use.

## Installation

Clone the repository into an empty directory, install the NPM dependencies, and connect to a database.
```
// The following will clone the repo into a directory. The last argument provided as optional accepts a string which will be used to
// title a new empty directory that the repo will be cloned into.
git clone git@github.com:VermillionOne/url-shortener.git [directory name(optional)]
// Install NPM dependencies
npm install
// Connect to database
// create a .env file and fill out the values in theese lines

DB_NAME=
DB_USER=
DB_PASS=
DB_HOST=
DB_SCHEMA=
DB_PORT=

// Start the server
mysql.server start
```

## Endpoints

### V1

#### Endpoints for Testing The API
##### [GET] /api/status

Should return `{healthy:true}`.

##### [GET] /api/urls/status

Should return `{healthy:true}`.

##### [GET] /go/status

Should return `{healthy:true}`.

#### URL Endpoints
##### [POST] /api/urls
Create a shortened URL.

This endpoint must be used with an existing user ID.

Accepts the following object:
```
{
  orginalUrl: [string],
  urlName: [string],
  userID: [string],
}
```

##### [GET] /api/urls
Display all URLs.

##### [GET] /api/urls/:id
Display URL based upon URL id.

##### [POST] /api/urls/:id
Update URL based upon URL id.

##### [DELETE]  /api/urls/:id
Delete URL based upon URL id.

#### User Endpoints

##### [POST] /api/users
Create a new user.

Accepts the following object:
```
{
  firstName: [string],
  lastName: [string],
  name: [string],
  username: [string],
}
```

##### [GET] /api/users
Display all Users.

##### [GET] /api/users/:id
Display User based upon User id.

##### [POST] /api/users/:id
Update User based upon User id.

##### [DELETE]  /api/users/:id
Delete User based upon User id.

##### [GET] /go/:shortUrl
Redirects to original URL address.

## Utiliity
