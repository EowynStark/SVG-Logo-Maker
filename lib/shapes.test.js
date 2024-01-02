// required files to ensure proper testing
const { Circle, Triangle, Square } = require('./shapes.js');
// tests shape specifically for circle
describe ('Circle', () => {
    it('should render correctly', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
});
// tests for triangle shape
describe ('Triangle', () => {
    it('should render correctly', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toEqual('<polygon points= "150, 18 244, 182 56, 182" fill ="blue" />');
    });
});
// tests for square shape
describe ('Square', () => {
    it('should render correctly', () => {
        const square = new Square();
        square.setColor('green');
        expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="green" />');
    });
});