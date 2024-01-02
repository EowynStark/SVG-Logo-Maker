const SVG = require('./svg.js');
const {Circle, Triangle, Square } = require('./shapes.js');

test('should render a 300 x 200 svg element', () => {
    const expectedSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`;
    const svg = new SVG();
    expectedSvg(svg.render()).toEqual(expectedSvg);
});