const { describe } = require('node:test');
const { Circle, Triangle, Square } = require('./shapes.js');

describe ('Circle', () => {
    it('should render correctly', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).to.equal('<circle cx="150" cy="100" r="80" fill"red" />');
    });
});