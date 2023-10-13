const Room = require('../src/classes/room');



describe('Room', () => {
    describe('Square Room', () => {
        it('should check if a point is inside the square room with center origin', () => {
            const room = new Room('square', { x: 4, y: 4 }, 'center');
            expect(room.isInside(1, 1)).toBe(true);
            expect(room.isInside(3, 3)).toBe(false);
            expect(room.isInside(-2, 2)).toBe(true);
            expect(room.isInside(2, -1)).toBe(true);
            expect(room.isInside(5, 2)).toBe(false);
        });


        it('should check if a point is inside the square room with corner origin', () => {
            const room = new Room('square', { x: 4, y: 4 }, 'corner');
            expect(room.isInside(1, 1)).toBe(true);
            expect(room.isInside(3, 3)).toBe(true);
            expect(room.isInside(-2, -2)).toBe(true);
            expect(room.isInside(3, -1)).toBe(true);
            expect(room.isInside(5, 2)).toBe(false);
        });


        it('should calculate the walls of the square room', () => {
            const roomCenter = new Room('square', { x: 6, y: 6 }, 'center');
            expect(roomCenter.wall).toEqual({ x: 3, y: 3 });

            const roomCorner = new Room('square', { x: 6, y: 6 }, 'corner');
            expect(roomCorner.wall).toEqual({ x: 6, y: 6 });
        });


        describe('Circular Room', () => {
            it('should check if a point is inside the circular room with center origin', () => {
                const room = new Room('circular', null, 'center', 4);
                expect(room.isInside(1, 1)).toBe(true);
                expect(room.isInside(0, 4)).toBe(true);
                expect(room.isInside(5, 2)).toBe(false);
            });

                it('should check if a point is inside the circular room with corner origin', () => {
                    const room = new Room('circular', null, 'corner', 4);
                    expect(room.isInside(1, 3)).toBe(true);
                    expect(room.isInside(-3, -1)).toBe(true);
                    expect(room.isInside(5, 2)).toBe(true);
                });
            it('should calculate the walls of the square room', () => {
                const roomCenter = new Room('square', { x: 6, y: 6 }, 'center');
                expect(roomCenter.wall).toEqual({ x: 3, y: 3 });

                const roomCorner = new Room('square', { x: 6, y: 6 }, 'corner');
                expect(roomCorner.wall).toEqual({ x: 6, y: 6 });
            });

            it('should calculate the walls of the circular room', () => {
                const roomCenter = new Room('circular', null, 'center', 6);
                expect(roomCenter.wall).toEqual({ x: 6, y: 6 });

                const roomCorner = new Room('circular', null, 'corner', 6);
                expect(roomCorner.wall).toEqual({ x: 12, y: 12 }); 
            });

                
        });
    });
});