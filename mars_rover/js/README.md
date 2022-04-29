# Mars rover kata JS

## Your Task

You're part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. Develop an API that translates the commands sent from earth to instructions that are understood by the rover.

## Solution comments

About the planet:
A new class was created to simulate Mars containing those objects inside the planet that the rover can find.

About facing an object:
Once the rover finds an obstacle, stopps and send a missage. The missage sent is represented as a message shown on the terminal.

## Requirements
You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
The rover receives a character array of commands.
- Implement commands that move the rover forward/backward (f,b).
- Implement commands that turn the rover left/right (l,r). <-- **StartHere**
- Implement wrapping from one edge of the grid to another. (planets are spheres after all)
- Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.

## Install dependencies

```
npm install jasmine-node -g
```

## Execute the test suite:

```
node_modules/jasmine-node/bin/jasmine-node spec/rover.spec.js
```
