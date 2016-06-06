# Installation
You will need node 6 and npm 3 for this app to work. To install the app simply run 
npm install
You should get all the necessary dependencies for the project.
In order for API to work you need to install mongodb and run it.
# Usage
Basic usage:
npm start
this will run only your client side code in the browser and watch for file changes
gulp dev
this will run both client and API parts of the application. You will need running mongodb server in order to run API. Both API and client watch for changes in the source file separately and reload accordingly 
gulp prod
this will build a distributable bundle of the application in the dist/prod folder. The project is already set up to be used on heroku and modulus.

# Usefull scripts
You can create a new angular 2 component running 
gulp create.component --name newComponentName
this will add a new component to the app, as well as all the necessary sass, html and test files.