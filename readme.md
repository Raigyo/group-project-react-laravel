# Event Dab

CRUD Application to manage events online.  
## Built With

* [Laravel](https://laravel.com/docs/5.8) - PHP Framework 
* [React](https://reactjs.org/docs/getting-started.html) - JS Framework
* [Postgresql](https://www.postgresql.org/docs/) - Database

## Authors

* [**Julien Caramazza**](https://github.com/Jucara) *(Backend)*
* [**Vincent Chilot**](https://github.com/Raigyo) *(Frontend)*
* [**Michael Lambrechts**](https://github.com/MichaelLambrechts) *(Frontend)*
* [**Thibaut Janssens**](https://github.com/ThibautJanssens) *(Backend)*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Getting Started

### Prerequisites
You'll need [composer](https://getcomposer.org/doc/) and [npm](https://www.npmjs.com/get-npm) to download and install all the dependencies.

You need a PostgreSQL database, if you already have one, you can put your credentials in the .env file in the DB_... section.  If you do not have one, you can use [docker](https://www.docker.com/). The docker-compose.yml is given in the root directory.

### Installing

To get a development env running, install all the dependencies with:
```cmd
composer install && npm install
```
If you don't have a PostgreSQL you can start the docker-compose.yml file is included up in the root directory
```cmd
docker-compose up
```
To start your PHP server use the command (*by default the server will start on localhost:8000*):
```cmd
php artisan serve
```
You can specify a port by using 
```cmd
php artisan serve --port=8080
```

## Deployment

The project is ready to deploy on heroku, just push this repo to your herokuapp repository.

## Documentation (API)

## Authentication

### POST /register

Only takes a JSON as input.
```json
{
    "name":"yourName",
    "email":"yourEmail",
    "password":"yourPassword"
}
```
Return your token.

### POST /login
Only takes a JSON as input.
```json
{
    "email":"yourEmail",
    "password":"yourPassword"
}
```
## Event

### Event object

* *id*: The identifier of the event as an integer.
* *name*: The name of the event.
* *date_event*: The date of the event.
* *author*: The identifier of the user that created the event.
* *description*: A description of the event.
* *reminder*: A date to know when to send a notification for all the participant at the event.
* *imageURL*: A link to the image that you want for the event.

### GET /events

Returns a complete list of all the events.

### GET /pastEvent

Returns a complete list of all the events that are already finished.

### GET /event/:id

Returns a event by id.

### PUT /event/:id

*(must be logged and the author of the event)*
Only takes JSON as input.

Updates a event.

### POST /event

*(must be logged)*
Only takes JSON as input.

Creates a new event.

Returns the newly created event id.
