class Robot {
    constructor(language = 'Swedish') {
        this.room = null;
        this.x = 0;
        this.y = 0;
        this.direction = 'N';
        this.commandString = '';
        this.robotSize = 2;
        this.commandMappings = language === 'Swedish' ?
            { 'V': 'L', 'H': 'R', 'G': 'F' } :
            { 'L': 'L', 'R': 'R', 'F': 'F' };

    }

    setRoom(room) {
        if (room) {
            this.room = room;
        } else {
            throw new Error('Robot is not in a room. Set the room before moving.');
        }
    }

    setStartingPosition(position) {
        if (this.room && this.room.isInside(position.x, position.y)) {
            this.x = position.x;
            this.y = position.y;
        } else {
            throw new Error('Invalid starting position: Outside the room or no room set.');
        }
    }

    setCommands(commands) {
        if (this.isValidCommandString(commands)) {
            this.commandString = commands.split('').map(command => this.commandMappings[command]).join('');
        } else {
            throw new Error('Invalid command string.');
        }
    }

    move() {
        for (const command of this.commandString) {
            this.processCommand(command);
        }
    }

    processCommand(command) {
        switch (command) {
            case 'V':
            case 'L':
                this.turnLeft();
                break;
            case 'H':
            case 'R':
                this.turnRight();
                break;
            case 'G':
            case 'F':
                this.moveForward();
                break;
            default:
                throw new Error(`Invalid command: ${command}`);
        }
    }

    turnLeft() {
        const directions = ['N', 'V', 'S', 'Ö'];
        this.direction = directions[(directions.indexOf(this.direction) + 1) % 4];
    }

    turnRight() {
        const directions = ['N', 'Ö', 'S', 'V'];
        this.direction = directions[(directions.indexOf(this.direction) + 1) % 4];
    }

    moveForward() {
        if (this.room) {
            const newPosition = { x: this.x, y: this.y };
            switch (this.direction) {
                case 'N':
                    if (Math.abs(newPosition.y) < this.room.wall.y) newPosition.y++;
                    break;
                case 'Ö':
                    if (Math.abs(newPosition.x) < this.room.wall.x) newPosition.x++;
                    break;
                case 'S':
                    if (Math.abs(newPosition.y) < this.room.wall.y) newPosition.y--;
                    break;
                case 'V':
                    if (Math.abs(newPosition.x) < this.room.wall.x) newPosition.x--;
                    break;
            }

            if (this.room.isInside(newPosition.x, newPosition.y)) {
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        }
    }

    report() {
        return `${this.x} ${this.y + this.robotSize} ${this.direction}`;
    }

    isValidCommandString(commands) {
        const validCommands = /^[LRFVHGNÖS]+$/;
        return validCommands.test(commands);
    }
}

module.exports = Robot;
