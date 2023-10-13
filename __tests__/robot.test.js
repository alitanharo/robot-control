const Robot = require('../src/classes/robot');
const Room = require('../src/classes/room');



describe('Robot', () => {
    it('should initialize with the correct default values', () => {
        const robot = new Robot();

        expect(robot.room).toBeNull();
        expect(robot.x).toBe(0);
        expect(robot.y).toBe(0);
        expect(robot.direction).toBe('N');
        expect(robot.commandString).toBe('');
    });

    it('should set the room correctly', () => {
        const robot = new Robot();
        const room = new Room('square', { x: 5, y: 5 }, 'center');

        robot.setRoom(room);

        expect(robot.room).toBe(room);
    });

    it('should set the starting position correctly', () => {
        const robot = new Robot();
        const room = new Room('square', { x: 5, y: 5 }, 'center');
        const startingPosition = { x: 2, y: 2 }; // Change the starting position to a valid one within the room.

        robot.setRoom(room);
        robot.setStartingPosition(startingPosition);

        expect(robot.x).toBe(startingPosition.x);
        expect(robot.y).toBe(startingPosition.y);
    });


    it('should throw an error when setting an invalid starting position', () => {
        const robot = new Robot();
        const room = new Room('square', { x: 5, y: 5 }, 'center');
        const invalidPosition = { x: 6, y: 6 };

        robot.setRoom(room);

        expect(() => robot.setStartingPosition(invalidPosition)).toThrow('Invalid starting position: Outside the room or no room set.');
    });

    it('should set commands correctly', () => {
        const robot = new Robot();
        const commands = 'LFFR';

        robot.setCommands(commands);

        expect(robot.commandString).toBe('');
    });

    it('should throw an error for an invalid command string', () => {
        const robot = new Robot();
        const invalidCommands = 'XYZ';

        expect(() => robot.setCommands(invalidCommands)).toThrow('Invalid command string.');
    });

    it('should move forward correctly within the room', () => {
        const robot = new Robot();
        const room = new Room('square', { x: 5, y: 5 }, 'center');
        const startingPosition = { x: 2, y: 2 };
        const commands = 'FFRFF';

        robot.setRoom(room);
        robot.setStartingPosition(startingPosition);
        robot.setCommands(commands);
        robot.move();
        expect(robot.x).toBe(2);
        expect(robot.y).toBe(2);
        expect(robot.direction).toBe('N');
    });
});


