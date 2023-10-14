# Robot Control Program

The Robot Control Program is a JavaScript application designed to control a robot within a two-dimensional room. The robot interprets commands in both Swedish and English, allowing it to navigate the room, and reports its final position and direction. 
The project also includes a `Room` class to define the boundaries of the room where the robot can move.

## Table of Contents

- [Robot Control Prgram](#robot-control-project)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Running Tests](#running-tests)
 

## Getting Started

These instructions will help you set up and run the robot control project on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository to your local machine:


  git clone https://github.com/alitanharo/robot-control.git



  Change to the project directory:

  cd robot-control

  Install the project dependencies:

  npm install

  run the project: 

  npm start

### Usage


To operate the robot and control its movements, you can follow these simple steps:

Create instances of the Room and Robot classes as needed.

Use the robotControl function to control the robot by passing the Robot instance, Room instance, starting position, and a string of commands in either Swedish or English.

The program will execute the commands and report the robot's final position and direction.




### Project Structure


The project is structured as follows:

Robot Class: A versatile class that models the robot, providing essential methods for control and reporting.

Room Class: A class that defines the room's shape (square or circular) and its dimensions.

Main Control Function: The robotControl function orchestrates the robot's movements within the room.

Tests: A set of automated test cases using Jest to verify the program's functionality.

### Examples

Two example scenarios have been provided to help you get started with the program:

Example 1 - Square Room (Swedish Commands):

Room: A 5x5 square room, starting at (1, 2).
Command String: 'HGHGGHGHG'
Expected Result: '1 3 N'


Example 2 - Circular Room (English Commands):

Room: A circular room with a radius of 10, starting at (0, 0).
Command String: 'RRFLFFLRF'
Expected Result: '3 1 Ö'
Feel free to modify or expand upon these examples to test different scenarios or configurations.

### Running Tests

You can run tests using Jest. Make sure you have Jest installed. To run the tests, execute:

npm test

Additional test cases can be added to further validate the program's behavior. Contributions of additional tests are highly encouraged.