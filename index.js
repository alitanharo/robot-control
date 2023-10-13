const Robot = require('./src/classes/robot');
const Room = require('./src/classes/room');
const robotControl = require('./src/main');

// Define and run the first example
function runExample1() {
    const room = new Room('square', { x: 5, y: 5 }, 'center');
    const robot = new Robot();
    const startingPosition = { x: 1, y: 2 };
    const commands = 'HGHGGHGHG';
    const result = robotControl(robot, room, startingPosition, commands);
    console.log('Example 1:', result);
}

// Define and run the second example
function runExample2() {
    const room = new Room('circular', null, 'center', 10);
    const robot = new Robot('English');
    const startingPosition = { x: 0, y: 0 };
    const commands = 'RRFLFFLRF';
    const result = robotControl(robot, room, startingPosition, commands);
    console.log('Example 2:', result);
}

// Run the examples
runExample1();
runExample2();
