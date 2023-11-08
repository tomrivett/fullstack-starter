# Practical React Test

## Overview

Congratulations on making it past the first round of interviews! Before making an offer, we want to ensure that candidates are capable of the skills they've mentioned during the first round of interviews. This repository contains the skeleton code for a very simple React application, and your task is to implement the functionality of the app.

The structure of this repository looks like:

```
/
|-- /client
|   |-- App.tsx
|   |-- index.tsx
|-- /server
|   |-- lib
|   |   |-- isPrime.ts
|   └-- index.ts
└-- Example.mp4
```

The six deliverables we are looking for are:

1. Implement the `/is-prime/:number` route in `server/index.ts`. This route should return `true` if the provided number is a prime number. The helper function in `server/lib/isPrime.ts` has been provided for you to perform this check.
2. Flesh out the component in `client/App.tsx`. You will need to add event handlers for the form, and communicate with the backend. When the user submits a number, the UI should add that number along with its result from the backend to the `history` array. `history` is used to show the user the sequence of all numbers they have submitted for checking.
3. On the server, add a route `/all-primes`. This route will return an array of all prime numbers which have been seen by the server. For instance, if one user submits the numbers `1, 2, 3` and a second user were to submit `5, 8, 10`, then this route would return the array `[1, 2, 3, 5]`. This route should _not_ be connected to the `history` entries you are recording on the client.
4. Extend the client UI so that it fetches from `/all-primes` and displays the stored primes as a list on the client.
5. Update your `/all-primes` route so that it only returns three numbers at a time, and allows the user to paginate through the primes (i.e. add 'Next Page' and 'Previous Page' buttons to the part of the interface on the client showing the stored primes).
6. Add undo and redo functionality to the React app. Undo and redo should adjust the `history` array in the manner a user would expect them to, and the buttons should be disabled when there is nothing to undo or redo.

Please note: The `history` array we have provided is only for demonstration purposes. It should be empty on initial page load.

You can use any package you like in order to implement the deliverables above. If the requirements are unclear, then please refer to the `Example.mp4` file which contains a demonstration of the expected functionality.

## Running the Code

Run `npm start` in a terminal :) The client can be accessed at `localhost:8080` and the server can be accessed at `localhost:8000`.

## Tests

Jest is pre-installed and can be run like so:

```
npm run test:unit
```

Jest is configured to look for test files under the `__tests__` directory, and which end with `.test.ts`. We have included a sample test file in `server/__tests__/example.test.ts` so you can see what that looks like.

**Only write tests if you have completed the deliverables. We are more interested in those than tests.**
