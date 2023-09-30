## About

This project is for a web development competition that me and my friend entered, and its a collaboration between me, @RiniWS12 and @putriamelia16.

It's a food recipe sharing website, kind of like a blog, but with a more straightforward approach.

Powered by Laravel, Inertia, and React JS for a good user experience

## Feature

- Login and register
- Dashboard panel to manage user's recipes
- CRUD for the user's recipe
- Changing the user's account information (username, password, email) without affecting their recipes
- Admin dashboard (accessable if you login with the email "admin@admin.com" and "IAmAnAdmin1234" as the password)

## How to install?

- Make sure Composer and node JS is installed, and make sure you have PHP 8.1 installed
- Copy this repository
- Open the terminal on the directory and type "composer install"
- Open the terminal again and type "npm install"
- Rename the .env.example file to just .env
- Open the terminal again and type php artisan key:generate
- Import the kulinerfest.sql to your local sql database

## How to run the project?

For windows :
- Open first.bat and dont close the window
- Open second.bat and dont close the window

For other OS :
- Open your OS terminal and type npm run dev
- Open your OS terminal again (on another window) and type php artisan serve
