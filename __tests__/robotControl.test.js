const robotControl = require('../src/main');
const Robot = require('../src/classes/robot');
const Room = require('../src/classes/room');


// Test cases for robotControl function

it('should move correctly inside a 5x5 square room with Swedish commands', () => {
    const room = new Room('square', { x: 5, y: 5 }, 'center');
    const robot = new Robot();
    const commands = 'HGHGGHGHG';
    const startingPosition = { x: 1, y: 2 };

    robotControl(robot, room, startingPosition, commands);
    expect(robot.report()).toBe('1 3 N');
});

it('should move correctly inside a circular room with radius 10 with English commands', () => {
    const room = new Room('circular', null, 'center', 10);
    const robot = new Robot('English');
    const commands = 'RRFLFFLRF';
    const startingPosition = { x: 0, y: 0 };

    robotControl(robot, room, startingPosition, commands);
    expect(robot.report()).toBe('3 1 Ö');
});

it('should handle invalid robot instance', () => {
    const room = new Room('square', { x: 5, y: 5 }, 'center');
    const invalidRobot = {};
    const startingPosition = { x: 1, y: 2 };
    const commands = 'HGHGGHGHG';
    expect(() => robotControl(invalidRobot, room, startingPosition, commands)).toThrowError('Invalid robot instance.');
});

it('should handle invalid room instance', () => {
    const invalidRoom = {};
    const robot = new Robot();
    const startingPosition = { x: 1, y: 2 };
    const commands = 'HGHGGHGHG';
    expect(() => robotControl(robot, invalidRoom, startingPosition, commands)).toThrowError('Invalid room instance.');
});




