# Todo App V2

----

Todo App V2 is made with Vue & Laravel APIs combined in one project file.

  - Sqlite for Storage of Users & Projects and to lessen the installation process when the reviewers is gonna test the app.
  - Vuex to store the fetched data from https://jsonplaceholder.typicode.com/todos, 
  - Lodash for data array mutations
  - SRI (simple-random-id) to generate unique IDs for the TODOS and Project IDs
  - Axios to fetch data from the Laravel API
  - Vue Bootstrap for faster prototyping due to limited time and also because laravel have bootstrap css files pre-installed.
  - JWT Web Tokens to provide security layer in the app.

### Installation

Todo App V2 requires [Node.js] , [composer] and [laravel]

Go to project directory and Install the composer dependencies using the terminal.

```sh
$ composer install
$ php artisan key:generate
$ php artisan serve
```


In another terminal, install the dependencies and devDependencies and run watch to access the vue modules.

```sh
$ npm install
$ npm run watch
```


Go to your localhost address in your preferred browser.

```sh
localhost:8000
```

----

#### Software Design Patterns, Paradigms and Best Practices

As much as possible, I tried to have my code simple and have it modular by using state management and components to structure the VUE side of the application. Knowing also that this is a time-limited project, I've used different technology like bootstrap to do faster prototypes and head to important functions that is need for the project and test it end to end as much as possible. 

----

#### Extra Features to Add
  - Have the Todos Data in the Database
  - Have more ways to login like Google Login or Facebook
  - Add a Kanban Board where you can see the real progress per Todo Items
  - Have Different Views (for sorting the Todo by member, category and etc.)
  - Push Notifications for every update in the todo list, especially to the owner of the project.
  - Have file uploads for images and attachments


----
#### Few Notes
  - You may have to refresh the pages multiple times for the API's to load. 
  - Thank you and have a great day :) 


Cholo Miguel Del Rosario
