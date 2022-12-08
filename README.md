# MOJO API

## Sept 22 honour guard succesfully foiled Galactic Queen Ireeta Tation and her dastardly first lieutenant Annoy Hans evil scheme and returned Nick's mojo to him! :rocket: :rocket: :rocket:

#### To run:

1. Clone repository and cd into the root directory.
1. Open in VS code `code .` from root directory in the terminal.
1. Open integrated terminal in VS code, this will be at the project root dir by default.
1. Install the dependencies, in our case Express and nodemon, by running `npm i` in the terminal.
1. Now you can use the start scripts we put in package.json, we can run `npm start` for running without nodemon or `npm run start:dev` for with nodemon.

If you get this error it just means you already have something running on port 3000.

`Error: listen EADDRINUSE: address already in use :::3000`

We can run this in the terminal to the PID or process id of the thing running on 3000
`sudo lsof -n -i :3000 | grep LISTEN`

and then we can kill it by running `kill ` and then the process id.
