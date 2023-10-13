const Robot = require('./classes/robot');
const Room = require('./classes/room');

function robotControl(robot, room, startingPosition, commands) {
    if (!(robot instanceof Robot)) {
        throw new Error('Invalid robot instance.');
    }

    try {
        if (!(room instanceof Room)) {
            throw new Error('Invalid room instance.');
        }

        robot.setRoom(room);
        robot.setStartingPosition(startingPosition);
        robot.setCommands(commands);
        robot.move();
        console.log('Robot successfully completed the commands.');
        return robot.report();
    } catch (error) {
        console.error(`Error in robotControl: ${error.message}`);
        throw error; 
    }
}

module.exports = robotControl;
